angular.module("app").directive("smileDirective", function(service){
  return {
        template:
      '<img src="{{randomPic}}" ng-mouseover="showButton = true"  ng-mouseleave="showButton = false" ng-mouseenter="buttonhidden = false" ng-mouseleave="buttonhidden = true"/><button class="photo-button-smile" class="add-remove" type="button" name="button" ng-show="showButton" ng-mouseenter="buttonhidden = false" ng-mouseleave="buttonhidden = true"> Sik-Wit-It </button>',
    restric: "EA",
    scope: {
      anotherRandom: "&"
    },

    controller: function($scope, service){
      $scope.whatever = (function(){
        service.oneRandomPhoto().then(function(response) {
        $scope.randomPic = response.data.url;
        $scope.anotherRandom = function(){
          $scope.reload();
        }
      });

      })();


    },

  }
})
