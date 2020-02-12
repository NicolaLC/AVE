require('dotenv').config();
const express = require('express');
const router = express.Router();
const Project = require('../schemas/project.schema');
const { exec } = require('child_process');
const defaultCustomElement = require('../static/custom-element-default');
const fs = require('fs');
module.exports = router

// Get all editor settings
router.get('/projects', async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
})

// Get one editor setting
router.get('/project/run/:pid', async (req, res) => {
	try {
		const project = await Project.findOne({ '_id': req.params.pid });
		if (project) {
			runProject(project, req, res);
		} else {
			res.status(500).json({ message: `No project found with _id: ${req.params.pid}` });
		}
	} catch {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
})

// Create one editor setting
router.post('/projects', async (req, res) => {
	try {
		await createProject(req, res);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
})

// Update one editor setting
router.patch('/projects/:id', (req, res) => {
})

// Delete one editor setting
router.delete('/projects/:id', (req, res) => {
})


const runProject = (project, req, res) => {
	switch (project.type) {
		case 'ANGULAR':
			exec(`cd ${project.path} && ng serve --port ${project.port || 9999}`, async (err, stdout, stderr) => { });
			return res.json({ message: `APP-RUNNING` });
		case 'ANGULAR_LIB':
			return res.json({ message: `APP-RUNNING` });
		case 'CUSTOM_ELEMENT':
			fs.readFile(`${project.path}.js`, (err, data) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: err.message });
				}
				res.json({ message: `APP-RUNNING`, fileData: data })
			});
			break;
		default: break;
	}
}

const createProject = async (req, res) => {
	switch (req.body.type) {
		case 'ANGULAR':
			return exec(`cd ${req.body.path || process.env.PROJECTS_PATH} && ng new ${req.body.name}`, async (err, stdout, stderr) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: err.message });
				}
				await exec(`npm i`, async (err, stdout, stderr) => {
					if (err) {
						console.error(err);
						return res.status(500).json({ message: err.message });
					}
					console.log('APP INSTALLED');
					const project = await Project.create({
						...req.body,
						path: `${process.env.PROJECTS_PATH}/${req.body.name}`
					})
					res.json(project);
				});
			});
		case 'ANGULAR_LIB':
			return exec(`cd ${req.body.path || process.env.PROJECTS_PATH} && ng generate library ${req.body.name}`, async (err, stdout, stderr) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: err.message });
				}
				await exec(`npm i`, async (err, stdout, stderr) => {
					if (err) {
						console.error(err);
						return res.status(500).json({ message: err.message });
					}
					console.log('LIB INSTALLED');
					const project = await Project.create({
						...req.body,
						path: `${process.env.PROJECTS_PATH}/${req.body.name}`
					})
					res.json(project);
				});
			});
		case 'CUSTOM_ELEMENT':
			return fs.writeFile(`${req.body.path || process.env.PROJECTS_PATH}/${req.body.name}.js`, defaultCustomElement(req.body.title, req.body.name), async (err) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: err.message });
				}
				console.log('CUSTOM_ELEMENT CREATED');
				const project = await Project.create({
					...req.body,
					path: `${process.env.PROJECTS_PATH}/${req.body.name}`
				});
				return res.json(project);
			});
		default:
			return res.status(500).json({ message: 'No type defined for project. abort' });
	}
}