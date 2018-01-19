
/**
 * Created by medibox on 30/7/17.
 */
angular.module('seatsPhoto',[])
    .controller('seatsPhoto',function ($scope,$rootScope,$state,$http) {
    $scope.bus={};   
$scope.searchBus=function(){
	

	console.log("search bus for",$scope.bus);
  $http.post('/auth/searchBus', $scope.bus).then(function (response){
        $rootScope.busInformatio = response;
        $state.go('app.bus');
    
        })}   
})
