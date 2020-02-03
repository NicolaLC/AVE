const mongoose = require('mongoose')

const tabSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  routerLink: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('Tab', tabSchema)