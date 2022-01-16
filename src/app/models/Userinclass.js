const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Userinclass = new Schema({
  id_user:{type:String},
  id_class:{type:String},
 });

module.exports=mongoose.model('Userinclasses',Userinclass)