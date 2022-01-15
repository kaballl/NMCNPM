const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
     name:{ type: String,require:true},
     email:{ type: String,require:true},
     gender:{ type: String,require:true},
     address:{ type: String,require:true},
     code:{ type: String,require:true},
     permission:{ type: Boolean,require:true},
     password:{ type: String,require:true},
})
module.exports=mongoose.model('User',User);