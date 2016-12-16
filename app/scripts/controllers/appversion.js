'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:AppversionCtrl
 * @description
 * # AppversionCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('AppversionCtrl', function ($scope, $http,server,adminId) {
    $scope.isShow = false;
    var url = server + "/appVersion/getAppVersion.json?";
    $http.get(url + "adminId=" + adminId.adminId).success(function (response) {
      console.log(response);
      $scope.list = response;
      $scope.modify = function (x) {
        $scope.isShow = true;
        console.log(x);
        $scope.version = x;
      }
      $scope.reset = function () {
        $http.post(server + "/appVersion/updateAppVersion.json", $scope.version).success(function (data) {
          console.log(data);
          if (data.id != null) {
            $scope.list = data;
            $scope.isShow = false;
          } else {
            $scope.list = response;
          }
        })
      }
    });
  });
