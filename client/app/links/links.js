angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data={};
  $scope.data.links=[];
  $scope.init = function(){
    this.getLinks();
  };
  $scope.getLinks = function(){
    $scope.data.links=Links.getLinks().then(function(links){
      $scope.data.links=links;
    });
  };
  $scope.init();
});
