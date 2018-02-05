

/**
 * Created by medibox on 30/7/17.
 */
angular.module('searchCtr',[])
    .controller('searchCtr',function ($scope,$rootScope,$state,$http) {
    $scope.bus={};   
    $scope.user1=$rootScope.loginuser;
	console.log("sfsfs",$scope.user1);


	$scope.searchBus=function(){
		console.log("search bus for",$scope.bus);
  		$http.post('/auth/searchBus', $scope.bus).then(function (response){
        $rootScope.busInformatio = response;
        if(!response.data.error){
        $state.go('app.bus');
         }
         else{
          $scope.error="sorry not such record";
         }

        })
  	}   
})
