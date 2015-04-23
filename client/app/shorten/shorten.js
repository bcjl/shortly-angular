angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, UrlUtils) {
  // Your code here
  $scope.link = {url:''};

  $scope.addLink = function(link){
    if(UrlUtils.isValidUrl(link.url))
      Links.addLink(link);
  };
});
