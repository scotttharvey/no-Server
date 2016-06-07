angular.module("app").directive("smileDirective", function(service){
  return {
        template:
      '<img src="{{randomPic}}" ng-mouseenter="buttonhidden = false" ng-mouseleave="buttonhidden = true" /><button class="photo-button-smile"  type="button" name="button" ng-hide="buttonhidden" ng-mouseenter="buttonhidden = false" ng-mouseleave="buttonhidden = true"><span> Sik-Wit-It</span> </button>',
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
      $scope.hidden = false;

     $scope.showBox = function(){
       $scope.hidden = false;
     }
     $scope.buttonhidden = true;
     $scope.addPhoto = function(picture) {
       $scope.apiPhotos.unshift(picture);
     }
     $scope.removePhoto = function(i) {
       $scope.apiPhotos.splice(i, 1);
       // $scope.show = true;
       console.log(i);
     }



    },

  }
})
