// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth, AccountUtils) {
  $scope.user = {};
  $scope.error = '';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $scope.error = '';
        $location.path('/links');
      })
      .catch(function (err) {
        $scope.error = 'Invalid User Credentials';
      });
  };

  $scope.signup = function () {
    console.dir($scope.user);
    if(AccountUtils.isValidPassword($scope.user.password) && AccountUtils.isValidUsername($scope.user.username)){
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $scope.error = '';
          $location.path('/links');
        })
        .catch(function (err) {
          $scope.error = 'Invalid User Credentials';
        });
    } else {
      $scope.error = 'Password Must Contain 1 Capital, 1 Lowercase, 1 Digital and 8 or More Characters & Username must be greater than 3 characters';
    }
  };
});
