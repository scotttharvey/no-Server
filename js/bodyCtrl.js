angular.module('app').controller('bodyCtrl', function($scope, service) {
    service.oneRandomPhoto().then(function(result){
      $scope.randomBackGround = result.data;
      $scope.something = true;
      console.log($scope.randomBackGround);
    });



})
