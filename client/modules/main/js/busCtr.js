
		
angular.module('busCtr',[])
    .controller('busCtr',function ($scope,$http,$rootScope,$state) {
$scope.canshowseat = false;
$scope.canshowseat1 = false;
$scope.selectThisSeat = true;
$rootScope.list = [];
 $rootScope.reservedseat = [];
//$scope.list={};
 $scope.user1=$rootScope.loginuser;
   $scope.allbusInfo =$rootScope.busInformatio.data;
  // $scope.allbusInfo = [{"asa":"asda"},{"asa":"asda"},{"asa":"asda"},{"asa":"asda"},{"asa":"asda"}];




















//</script>
  $scope.allBusInfo = function(bus){
    $scope.list = [];
    $scope.Singlebus = bus;
      var query = {
        businfo:bus
      }
       // console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWW",JSON.stringify(response.data[0].reservedSeats));
      $scope.reserved = [];
      $http.post('/auth/getBusinfo',query).then(function (response){
           $scope.reserved = response.data[0].reservedSeats;
          
      })
  }

	$scope.proceed=function(){
		  console.log("list selected ",JSON.stringify( $scope.list));
      var query = {
        seats:$scope.list,
        businfo:$scope.Singlebus
      }
  		$http.post('/auth/proceed',query).then(function (response){
       
       $rootScope.reservedseat = response.data.reservedSeats;
       console.log("reserved seats ", response.data.reservedSeats);
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVV",JSON.stringify($rootScope.reservedseat));
       
        })
  	}   










$scope.seats=function(desc){

$scope.canshowseat = desc;
// $state.go("app.seatsPhoto");

}

$scope.seats1=function(desc){

$scope.canshowseat1 = desc;
// $state.go("app.seatsPhoto");

}



$scope.selectThisSeat=function(seatnumbersingle){
	//$scope.numberall  = seatnumber;
	 //$scope.reservedseat=[1,2,3,4];
var index = $scope.list.indexOf(seatnumbersingle);

     if(index >-1){
         $scope.list.splice(index,1);
     }else{
         $scope.list.push(seatnumbersingle);
     }

//$scope.list[seatnumber]=seatnumber;
// $scope.selectThisSeat[seatnumber] =seatnumber;
// $state.go("app.seatsPhoto");

}







    })