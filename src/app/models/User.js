const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name:{type:String},
  address:{type:String},
  gender:{type:String},
  code:{type:String},
  email:{type:String},
  password:{type:String}, 
  permission:{type:String}
  
});

module.exports=mongoose.model('User',User)