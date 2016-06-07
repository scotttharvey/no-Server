angular.module('app').controller('addyCtrl', function($scope, service) {
$scope.buttonhidden = true;
  // $scope.show = false;
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
$scope.removePhoto = function(i) {
  $scope.apiPhotos.splice(i, 1);
  // $scope.show = true;
  console.log(i);
}


$scope.getPhotos = function(search){
// console.log("pop");
  service.randomPhotos($scope.search).then(function(result) {
      $scope.randomPhotos = result;
      // return $scope.randomPhotos;
  });
}

$scope.enterKeyM = function(e){

   if (e.keyCode === 13){
     $scope.getPhotos();
   }
 }


  $scope.hidden = false;

 $scope.showBox = function(){
   $scope.hidden = false;
 }



})
