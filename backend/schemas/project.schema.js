const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  path: {
    type: String,
    required: false
  },
  port: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Project', projectSchema)