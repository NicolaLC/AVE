const express = require('express')
const router = express.Router()
const Tab = require('../schemas/tab.schema')
module.exports = router

// Get all editor settings
router.get('/tabs', async (req, res) => {
    try {
        const tabs = await Tab.find()
        res.json(tabs)
    } catch {
        res.status(500).json({ message: err.message })
    }
})

// Get one editor setting
router.get('/tabs/:id', (req, res) => {
})

// Create one editor setting
router.post('/tabs/', (req, res) => {
})

// Update one editor setting
router.patch('/tabs/:id', (req, res) => {
})

// Delete one editor setting
router.delete('/tabs/:id', (req, res) => {
})