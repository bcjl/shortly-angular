angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, UrlUtils, Auth) {
  // Your code here
  $scope.link = {url:''};
  $scope.error = false;
  $scope.success = false;

  $scope.addLink = function(link){
    if(UrlUtils.isValidUrl(link.url)){
      Links.addLink(link);
      $scope.link={url:'http://'};
      $scope.success = 'Link Added';
      $scope.error='';
    } else {
      $scope.error='Invalid Url';
      $scope.success = '';
    }
  };

  $scope.logout = function(){
    Auth.signout();
  };

});
