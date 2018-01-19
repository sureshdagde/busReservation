
/**
 * Created by medibox on 30/7/17.
 */

angular.module('appMain',['appMainCtrl','registrationCtrl','searchCtr','busCtr','adminBusCtr','seatsPhoto'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            templateUrl: "modules/main/template/main.html",
            controller: "HelloWordCtrl"
        })


        .state('app.registration', {
            url: "/registration",
            templateUrl: "modules/main/template/registrationForm.html",
            controller: "registrationCtrl"
        })
        .state('app.search', {
            url: "/search",
            templateUrl: "modules/main/template/search.html",
            controller: "searchCtr"
        })
        .state('app.bus', {
            url: "/bus",
            templateUrl: "modules/main/template/bus.html",
            controller: "busCtr"
        })
        .state('app.adminBus', {
            url: "/adminBus",
            templateUrl: "modules/main/template/adminBus.html",
            controller: "adminBusCtr"
        })
        .state('app.seatsPhoto', {
            url: "/seatsPhoto",
            templateUrl: "modules/main/template/seatsPhoto.html",
            controller: "seatsPhoto"
        })
});
