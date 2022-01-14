const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Class = new Schema({
  title:{type:String},
  content:{type:String},
  
});

module.exports=mongoose.model('Class',Class)