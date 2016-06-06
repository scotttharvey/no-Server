angular.module("app").directive("smileDirective", function(service){
  return {
        template:
      '<img src="{{randomPic}}" />',
    restric: "EA",

    controller: function($scope, service){
      $scope.whatever = (function(){
        service.oneRandomPhoto().then(function(response) {
        $scope.randomPic = response.data.url;
      });
      })();
    }

  }
})
