


angular.module('adminBusCtr',[])
    .controller('adminBusCtr',function ($scope,$http,$state) {
        $scope.bus ={};
        $scope.createBus=function(){
            
                  $scope.message="Record inserted succesfully" 
                 console.log("welcomwelcomwelcom",JSON.stringify($scope.bus))
                 $http.post('/auth/createBus', $scope.bus).then(function (response){
                    console.log("user data",JSON.stringify(response))   ;
                            if(response.data.ok){
         // $scope.record=JSON.stringify(response.data);
           //  $state.go('app.search');
           console.log("welcom")
       // $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        }else{
            //$scope.error = response.data.error;
         //   $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        console.log("not welcome");
        }
 
  
    })
            }  


$scope.update=function(){
            
                  
                 console.log("welcomwelcomwelcom",JSON.stringify($scope.bus))
                 $http.post('/auth/update', $scope.bus).then(function (response){
                    console.log("");
                            if(response.data.ok){
         // $scope.record=JSON.stringify(response.data);
           //  $state.go('app.search');
           console.log("welcom")
       // $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        }else{
            //$scope.error = response.data.error;
         //   $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        console.log("not welcome");
        }
 
  
    })
            }


            $scope.delete1=function(){
            
                  
                 console.log("welcomwelcomwelcom",JSON.stringify($scope.bus))
                 $http.post('/auth/delete1', $scope.bus).then(function (response){
                    console.log("");
                            if(response.data.ok){
         // $scope.record=JSON.stringify(response.data);
           //  $state.go('app.search');
           console.log("welcom")
       // $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        }else{
            //$scope.error = response.data.error;
         //   $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

        console.log("not welcome");
        }
 
  
    })
            }  

$scope.showInsert = false;
$scope.showEdit = false;

$scope.insert = function(){
    $scope.showEdit = false;
    console.log("XXXXXXXXXXXXXXXXXXXX");
    $scope.showInsert = true;
}

$scope.edit = function(){
    $scope.showInsert = false;
    $scope.showEdit = true;
}

$scope.searchBusRecord=function(){
            
                  
                 console.log("welcomwelcomwelcom",JSON.stringify($scope.bus))
                 $http.post('/auth/searchBusRecord', $scope.bus).then(function (response){
                    console.log("XXXXXXXXXXXXXXXXXXXX",JSON.stringify(response.data[0]));
                    
                            if(response.data[0].id){
                                    $scope.bus = response.data[0];
                                     $scope.showInsert = true;

                        }else{
                            //$scope.error = response.data.error;
                         //   $scope.error="welcome "+$scope.bus._id+"  your registration is succesfull "

                        console.log("not welcome");
                        }
                     
                  
    })
            }





        })
