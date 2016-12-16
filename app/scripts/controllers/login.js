'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('LoginCtrl', function ($scope, $http,server,adminId,$cookieStore,$location) {
    $scope.reset = function () {
      var url = server + "/admin/login.json"
      console.log($scope.user);
      $http.post(url, $scope.user).success(function (response) {
        console.log(response);
        if(response.id!=null){
          console.log(response.id);
          $cookieStore.put('adminId', response.id);
          $cookieStore.put("userName",response.userName);
          window.location.href="index.html"
        }
      });
    };
  });
