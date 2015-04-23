angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, UrlUtils, Auth) {
  // Your code here
  $scope.link = {url:''};

  $scope.addLink = function(link){
    if(UrlUtils.isValidUrl(link.url)){
      Links.addLink(link);
    }
  };

  $scope.logout = function(){
    Auth.signout();
  };

});
