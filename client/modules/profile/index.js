/**
 * Created by medibox on 4/8/17.
 */
angular.module('appProfile',[])

    .config(function($stateProvider) {
        $stateProvider

            .state('app.profile', {
                url: "/profile",
                views: {
                    "" 	:    { templateUrl: "modules/profile/template/profile.html" },
                    "view1@profile": { template: "SssSSHHhhhhhh..!" },
                    "view2@profile": { templateUrl: "modules/profile/template/profileDetails.html" ,
                        controller: function($scope){
                            $scope.Skills = ["C", "C++", "JAVA"];
                        }
                    }
                }
            })
    });
