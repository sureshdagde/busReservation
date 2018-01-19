
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	id:{type : String},
    busName: {type : String},
    source:{type : String},
    destination:{type : String},
    discription: {type : String},
    bordingTime : {type : Date},
    droppingTime : {type : Date}, 
    seats: {type: Number},
    window:{type:Number},
    inr:{type:Number},
    email:{type:String},
    mobileNumber:{type:Number},
//    userType : [{type: String, default:'user', enum : ['admin','owner','user']}],
  //  userDate: Date,
    })

module.exports = mongoose.model('bus',schema);