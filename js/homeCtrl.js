angular.module('app').controller('homeCtrl', function($scope, $state, service) {

  service.kitShit().then(function (response){
    console.log("hello?", response);
    $scope.img = response;
      $(".kitten-images").append($scope.img.data);
  });

  // $scope.imgtest = img;

  // console.log(img);

  $scope.test = "You've done it for Home Control"



})
