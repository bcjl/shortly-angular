angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data={};
  // $scope.data.links=[];
  $scope.init = function(){
    this.getLinks();
  };
  $scope.getLinks = function(){
    Links.getLinks().then(function(links){
      $scope.data.links=links;
    });
  };
  $scope.logout = function(){
    Auth.signout();
  };

  $scope.init();
});
