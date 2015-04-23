// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.error = '';

  $scope.signin = function () {
    console.log('yes');
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $scope.error = '';
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.error = 'Invalid User Credentials';
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $scope.error = '';
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.error = 'Invalid User Credentials';
      });
  };
});
