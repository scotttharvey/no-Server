angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: "/views/home-tmpl.html",

    controller: "homeCtrl"
})
.state('addy', {
  url: "/addy",
    controller: "addyCtrl",
    templateUrl: "/views/addy-tmpl.html"
})
.state('picInfo', {
  url: "/picInfo",
    controller: "picInfoCtrl",
    templateUrl: "/views/picInfo-tmpl.html"
})

})
