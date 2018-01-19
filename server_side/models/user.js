

/**
 * Created by Pravin on 12/04/17.
 */

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userName: {type : String},
    password: {type : String},
    aadharNumber : {type : Number},
    email : {type : String, required: true}, 
    mobileNumber: {type: Number},
//    userType : [{type: String, default:'user', enum : ['admin','owner','user']}],
  //  userDate: Date,
    })

module.exports = mongoose.model('user',schema);
