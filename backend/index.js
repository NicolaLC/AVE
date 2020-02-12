require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json())
app.use(cors())

const tabsRouter = require('./routes/tabs')
app.use('/editor', tabsRouter)
const projectsRouter = require('./routes/projects')
app.use('/editor', projectsRouter)
const filesRouter = require('./routes/file')
app.use('/', filesRouter)

app.listen(3000, () => console.log('server started'));