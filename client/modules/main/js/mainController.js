
/**
 * Created by medibox on 30/7/17.
 */
angular.module('appMainCtrl',[])
    .controller('HelloWordCtrl',function ($scope,$http,$state) {
        

$scope.user={};
$scope.search=function(){
   $http.post('/auth/login', $scope.user).then(function (response){
  console.log("asdfdf",   JSON.stringify(response.data));

  
        if(response.data.ok){
          $scope.loginuser="welcom "+$scope.user.name+"  your registration is succesfull "

          $scope.record=JSON.stringify(response.data);
             $state.go('app.search');
        }else{
            $scope.error = response.data.error;
        }
         // $state.go('app.search',JSON.stringify(response));
   })
}


$scope.gotosignup =function(){
   $state.go('app.registration');
}








})