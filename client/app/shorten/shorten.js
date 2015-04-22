angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.url = '';

  $scope.submit = function(){
    console.log('LOGGED: ',$scope.url);
  };
});
