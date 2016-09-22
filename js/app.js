angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');
var baseUrl = /local|127/.test(window.location.hostname) ? '' : '/sik';

$stateProvider
.state('home', {
  url: "/home",
  templateUrl: baseUrl + "/views/home-tmpl.html",
    controller: "homeCtrl"
})

.state('addy', {
  url: "/addy",
    controller: "addyCtrl",
    templateUrl: baseUrl + "/views/addy-tmpl.html"
})
.state('smile', {
  url: "/smile",
    templateUrl: baseUrl + "/views/smile-tmpl.html",
    resolve: {}
  })
})
