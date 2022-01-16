const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const WebAnnouncement = new Schema({
  title:{type:String},
  content:{type:String},
  day:{type:String},
  month:{type:String}


  
});

module.exports=mongoose.model('WebAnnouncement',WebAnnouncement)