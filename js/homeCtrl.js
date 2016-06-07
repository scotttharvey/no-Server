angular.module('app').controller('homeCtrl', function($scope, $state, service) {

    service.apiPhotos().then(function(response) {
        $scope.apiPhotos = response;
        return $scope.apiPhotos;
    });

$scope.getPhotos = function(search){
    service.randomPhotos($scope.search).then(function(result) {
        $scope.randomPhotos = result;
    });
  }
  $scope.addPhoto = function(picture) {
    $scope.apiPhotos.unshift(picture);
  }
  $scope.removePhoto = function(i) {
    $scope.apiPhotos.splice(i, 1);
    // $scope.show = true;
    console.log(i);
  }

  $scope.buttonhidden = true;

  $scope.hidden = false;

 $scope.showBox = function(){
   $scope.hidden = false;
 }



})
