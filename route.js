



/**
 * Created by Pravin on 12/04/17.
 */

'use strict';


var auth = require("./server_side/controller/api/auth/auth.js");//save database server from  request response application programming interface 
//var auth = require("./server_side/controller/api/auth/auth.js");//save database server from  request response application programming interface 
// E:\codebase\crive3\calenderCode\calender\server_side\controller\api\events\createevents.js

module.exports.register = function(router){

 router.route('/auth/login').post(auth.login);
 router.route('/auth/createUser').post(auth.createUser);
router.route('/auth/createBus').post(auth.createBus);
router.route('/auth/update').post(auth.update);
router.route('/auth/delete1').post(auth.delete1);
 router.route('/auth/searchBus').post(auth.searchBus);
router.route('/auth/searchBusRecord').post(auth.searchBusRecord);
router.route('/auth/proceed').post(auth.proceed);
router.route('/auth/getBusinfo').post(auth.getBusinfo);

  console.log('welcome routes registered..!');
};

