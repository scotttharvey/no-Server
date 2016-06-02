angular.module('app').service('service', function($http) {


   this.kitShit= function(){

    return $http({
      method: 'GET',
      url: 'http://thecatapi.com/api/images/get?format=html&results_per_page=50'
    }).then(function (response){
      console.log("hello?", response);
      return response;
    })
};

})
