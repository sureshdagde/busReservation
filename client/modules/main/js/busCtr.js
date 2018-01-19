
angular.module('busCtr',[])
    .controller('busCtr',function ($scope,$http,$rootScope,$state) {

   $scope.allbusInfo =$rootScope.busInformatio.data;
  // $scope.allbusInfo = [{"asa":"asda"},{"asa":"asda"},{"asa":"asda"},{"asa":"asda"},{"asa":"asda"}];

   console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV",JSON.stringify($scope.allbusInfo));

$scope.seats=function(){


$state.go("app.seatsPhoto");

}




    })