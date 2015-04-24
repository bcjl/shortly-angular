angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      return resp.data;
    });
  };

  var addLink = function(link){
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function(resp){
      return resp.data;
    });
  };
  return {
    getLinks: getLinks,
    addLink: addLink
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})
.factory('UrlUtils', function(){
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  var isValidUrl = function(url) {
    return url.match(rValidUrl);
  };

  return {
    isValidUrl: isValidUrl
  };
})
.factory('AccountUtils', function(){
  var reqDigit = /[0-9]/;
  var reqCapital = /[A-Z]/;
  var reqLowercase = /[a-z]/;
  var isValidPassword = function(pw) {
    return (!!pw.match(reqDigit) && !!pw.match(reqCapital) && !!pw.match(reqLowercase) && (pw.length > 8));
  };

  var isValidUsername = function(username){
    return (username.length > 3);
  };

  return {
    isValidPassword: isValidPassword,
    isValidUsername: isValidUsername
  };
});
