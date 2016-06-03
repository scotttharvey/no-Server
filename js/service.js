angular.module('app').service('service', function($http) {


    this.apiPhotos = function() {

        return $http({
            method: 'GET',
            url: 'http://www.splashbase.co/api/v1/images/latest'
        }).then(function(response) {
            console.log("hello?", response);
            return response.data.images;
        })
    };

      this.randomPhotos = function(search){
        console.log("sees");
        return $http({
          method: "GET",
          url: "http://www.splashbase.co/api/v1/images/search?query=" + search
        }).then(function(result){
          console.log("Made it", result);
          return result.data;
        })
      }




})
