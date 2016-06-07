angular.module("app").directive("smileDirective", function(service){
  return {
        template:
      '<img src="{{randomPic}}" ng-mouseover="showButton = true"  ng-mouseleave="showButton = false"/><button class="photo-button-smile" class="add-remove" type="button" name="button" ng-show="showButton"> Sik-Wit-It </button>',
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
