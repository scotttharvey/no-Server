angular.module('app').controller('homeCtrl', function($scope, $state, service) {

  service.apiPhotos().then(function (response){
    console.log("hello", response);
    $scope.apiPhotos = response;
      return $scope.apiPhotos;
  });

  $scope.test = "You've done it for Home Control";



})
