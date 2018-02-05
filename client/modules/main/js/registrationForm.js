
/**
 * Created by medibox on 30/7/17.
 */
 
angular.module('registrationCtrl',[])
    .controller('registrationCtrl',function ($scope,$http,$state) {
        $scope.user ={};
        $scope.createUser=function(){
           //console.log("sdfhg"+$scope.user.aadharNumber.length);
            //console.log("sdfhg"+$scope.user.mobileNumber.length);
            //console.log("sdfhg"+$scope.user.name.length);
            //console.log("sdfhg"+$scope.user.password.length);
        
           var found=0;
            for (var i = 0; i < $scope.user.email.length; i++) {
                if($scope.user.email[i]=="@"){
                         found++;
                }   
                }
                if(found==1 && $scope.user.password.length>8 && $scope.user.name.length>4 && $scope.user.password==$scope.user.conformPassword ){
                  
                
                 $http.post('/auth/createUser', $scope.user).then(function (response){
  //console.log("asdfdf",   JSON.stringify(response.data));

  
        if(response){
         // $scope.record=JSON.stringify(response.data);
           //  $state.go('app.search');
        $scope.error="welcome "+$scope.user.name+"  your registration is succesfull "

        }if(response.data.error){
            //$scope.error = response.data.error;
        $scope.error="the userName "+$scope.user.name+"  is exist,you can not register with same userName "
        }
         // $state.go('app.search',JSON.stringify(response));
   })
            }  if(found!=1){$scope.error="invalid email"}if($scope.user.password.length<=8){$scope.error="invalid password"}
            if($scope.user.name.length<=4){$scope.error="username is greter than 4 character"}if($scope.user.password!=$scope.user.conformPassword){$scope.error="password combination not match"}
}
$scope.createUserBack=function(){
 $state.go('app.home');
 //$state.go('app.main');
}


})
           /* $http.post('/auth/createUser', $scope.user).then(function (response){
                                console.log(response);
                                
                                    if(response.data.ok){$scope.invalid="username exist"}
                                        else{
                                        $scope.error = response.data.error;}

                               
             //$scope.err1='password not match';

var length1=(($scope.user.password).length);
var length2=(($scope.user.aadharNumber).length);
console.log($scope.user.password[2]);
    //var length2=(($scope.user.aadarNumber).length);
                    if((length1>8)  && (length2==12 ) && ($scope.body.password==$scope.body.conformPassword))
                    {

                       //if(){
                      $state.go('app.home');
                                
                        //}else{
                          //   $scope.err1='----->password not match';
                            //console.log($scope.err1);}
                    //}
                    }else{
                        $scope.err2='----->password to sort';
                   //     console.log($scope.err2);
        }/*
    if(length2<12){
        console.log($scope.err3);
*/  
                     

    




















             //console.log("login user",JSON.stringify($scope.user));
             //function ab()
             //{
             //while($scope.user.password[i]!='/0')
             //{
               // if($scope.user.password[i]=="@")
               // {    return 1; break}
               // else{
                 //   i++;
                //}
                //return 0;

  //           }
      //              var length=(($scope.user.password).length);
    //                if(length>8){

        //            if($scope.user.password==$scope.user.conformPassword){
                    //substr("$scope.user.email","@");
    //                if(substr("$scope.user.email","@"))
      //                console.log("welcom");  
                    
        //            }}

                    //}})
                    /*
                         $http.post('/auth/signUp', $scope.user).then(function (response){
                            console.log(response);
                            $state.go('app.home');
                         })
                    }
                    else{
                        $scope.error='password not match';//to pass ui
                        console.log("password not match");
                    }


        }
        $scope.xzy = "suresh";
        
})*/