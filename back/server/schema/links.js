const mongoose  = require('mongoose');
const { Schema } = mongoose;

const links = new Schema({
  name:  String ,
  link: String
});

const Links = mongoose.model('Links', links);


module.exports = Links;