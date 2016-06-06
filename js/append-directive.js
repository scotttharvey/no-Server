angular.module("app").directive("appendMe", function($document){
  return {
    templateUrl: '/views/navBar.html',
    restrict: "EA",
    scope: {
      images: '=',
      item: '='
    },
    controller: function($scope, service){
      // $scope.addToStream = service.randomPhotos();
      // console.log($scope.apiPhotos);

    },
    link: function(scope, element, attrs){

      }
    }


})
