
angular.module('adminBusCtr',[])
    .controller('adminBusCtr',function ($scope,$http,$state) {
        $scope.bus ={};
        $scope.createBus=function(){
            
                  
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

        })
