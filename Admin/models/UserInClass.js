const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserInClass = new Schema({
     id_class:{ type: String,require:true},
     id_user:{ type: String,require:true},
})
module.exports=mongoose.model('Spoi',UserInClass);