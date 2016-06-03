angular.module('app').controller('homeCtrl', function($scope, $state, service) {

    service.apiPhotos().then(function(response) {
        $scope.apiPhotos = response;
        return $scope.apiPhotos;
    });

$scope.getPhotos = function(search){
  // console.log("pop");
    service.randomPhotos($scope.search).then(function(result) {
        $scope.randomPhotos = result;
        // return $scope.randomPhotos;
    });
  }


    $scope.test = "You've done it for Home Control";



})
