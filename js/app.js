angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

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
.state('smile', {
  url: "/smile",
    // controller: "smileCtrl",
    templateUrl: "/views/smile-tmpl.html",
    resolve: {}
})

})
