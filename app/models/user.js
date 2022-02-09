var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String, 
  last_name: String, 
  email: String,
  gender: String,
  state: String,
  date: Date,
  phone: String
})

var User = mongoose.model('User', userSchema)

module.exports = User