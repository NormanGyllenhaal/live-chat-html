'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:MatchCtrl
 * @description
 * # MatchCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('MatchCtrl', function ($scope, $http,server,adminId,statis) {
    $scope.pageClass = 'page-1';
    var url = server + "/statistics/getMatchNum.json?";
    var getNowData = function () {
      $http.get(server + "/statistics/getMatchDayNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
    $http.get(url + "adminId=" + adminId.adminId).success(function (response) {
      console.log(response);
      $scope.data = response;
    });
  });
