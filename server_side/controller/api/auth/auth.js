



/**
 * Created by suresh on 12/04/17.
 */
//this file is database i.e update delete insert find  and registrationform.js file is only for logic or validation 

var user = require('../../../models/user');//due to use of collection schema
var bus = require('../../../models/bus');
function createUser(req,res){
  //user.remove({});

  console.log("namenamenamename",JSON.stringify(req.body))//,JSON.stringify(data));
               user.remove({});
    user.find({"userName": req.body.name},function (err, data) {

                 console.log(" errorerrorerrorerror",JSON.stringify(err))//,JSON.stringify(data));
                console.log("datadatadatadata ",JSON.stringify(data))//,JSON.stringify(data));
               

              if(!data[0]){
                   res.json({"ok":"you can register"}); 
               var newuser = new user();

               newuser.userName = req.body.name;
               newuser.password = req.body.password;
              newuser.aadharNumber = req.body.aadharNumber;
               newuser.email = req.body.email;
               newuser.mobileNumber =req.body.mobileNumber;
               console.log("no data avalable",JSON.stringify(newuser));
               newuser.save(function (err, savedUser) {
                res.json(savedUser);

               });
               

}else{
  console.log("data available");
                res.json({"error":"sorry you cannot register"});
               }

 
       });      
};

function login(req,res){
     //console.log("XXXXXXXX",JSON.stringify(req.body));//req.body.password is from client 

/*user.find({},function(err,result){
console.log("7777777777777777",JSON.stringify(result));//req.body.password is from client 

})
*///req.body.name wherer name is from the main.html    ng-model=user.name ng.model =user.password; 
    user.find({"userName": req.body.name,"password":req.body.password},function (err, data) {
              // console.log("login succesfully",JSON.stringify(data))//,JSON.stringify(data));
               if(data[0]){
                res.json({"ok":"you can login"});
               }else{
                res.json({"error":"userName password combination not match"});
               }
       });      
};


function createBus(req,res){
  //user.remove({});

  //console.log("namenamenamename",JSON.stringify(req.body))//,JSON.stringify(data));
               
    bus.find({"id": req.body._id},function (err, data) {

                 console.log(" errorerrorerrorerror",JSON.stringify(err))//,JSON.stringify(data));
                console.log("datadatadatadata ",JSON.stringify(data))//,JSON.stringify(data));
               

              if(!data[0]){

               var newbus = new bus();
               newbus.id = req.body._id;
               newbus.busName = req.body.name;
               newbus.source =req.body.source;
               newbus.destination=req.body.destination;
              newbus.discription = req.body.discription;
               newbus.bordingTime = req.body.bordingTime;
               newbus.droppingTime =req.body.droppingTime;
               newbus.seats  =req.body.seats;
               newbus.window =req.body.window;
               newbus.inr =req.body.inr;
               newbus.email =req.body.email;
               newbus.mobileNumber =req.body.mobileNumber;

               newbus.save(function (err, savebus) {

                    /* bus.find({},function(err,data){
                      console.log("alldata ",JSON.stringify(data))
                      res.json(data);
                     })
                     */
               });

               
 
            }else{
              console.log("data available");
                            res.json({"error":"sorry you cannot register"});
                           }

 
       });      
};




function update(req,res){
  //user.remove({});

  console.log("update admin data",JSON.stringify(req.body))//,JSON.stringify(data));
               
    bus.update({"id": req.body._id},{$set:{"busName":req.body.name,"discription":req.body.discription
, "bordingTime":req.body.bordingTime, "droppingTime":req.body.droppingTime ,"seats":req.body.seats, 
"window":req.body.window, "inr":req.body.inr, "email":req.body.email }},function (err, data) {

                 console.log(" update error",JSON.stringify(err))//,JSON.stringify(data));
                console.log("update data ",JSON.stringify(data))//,JSON.stringify(data));
            bus.remove({});
            bus.find( {},function(err,data){
                 console.log("alldata ",JSON.stringify(data))
                 res.json(data);
               })   
       });   
};



function delete1(req,res){
  //user.remove({});

  //console.log("namenamenamename",JSON.stringify(req.body))//,JSON.stringify(data));
               
    bus.remove({"id":req.body._id},function (err, data) { 
                console.log(" update error",JSON.stringify(err))//,JSON.stringify(data));
                console.log("remove data ",JSON.stringify(data))})
        
};

function searchBus(req,res){


console.log("bus info",JSON.stringify(req.body))
bus.find({"source":req.body.source,"destination":req.body.destination},function(err,data){
console.log("error",JSON.stringify(err))
 
   console.log("  bus data ",JSON.stringify(data))
 res.json(data); 
  

})}   


module.exports.createUser = createUser;

module.exports.login = login;
module.exports.createBus = createBus;
module.exports.update = update;
module.exports.searchBus = searchBus;

module.exports.delete1 = delete1;






