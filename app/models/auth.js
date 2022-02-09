var mongoose = require('mongoose')
var Schema = mongoose.Schema

var authSchema = new Schema({
  email: String,
  password: String
})

var Auth = mongoose.model('Auth', authSchema)

module.exports = Auth