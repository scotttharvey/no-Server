angular.module('app').controller('addyCtrl', function($scope, service) {
  service.apiPhotos().then(function(response) {
      $scope.apiPhotos = response;
      return $scope.apiPhotos;
  });
// $scope.removePhoto = function(picture){
//   $scope.apiPhotos.
// }

$scope.addPhoto = function(picture) {
  $scope.apiPhotos.unshift(picture);
}

$scope.getPhotos = function(search){
// console.log("pop");
  service.randomPhotos($scope.search).then(function(result) {
      $scope.randomPhotos = result;
      // return $scope.randomPhotos;
  });
}


  $scope.hidden = false;

 $scope.showBox = function(){
   $scope.hidden = false;
 }



})
