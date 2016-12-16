'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:ConsumeCtrl
 * @description
 * # ConsumeCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('ConsumeCtrl', function ($scope, $http,server,adminId,statis) {
    $scope.pageClass = 'page-1';
    var url = server + "/statistics/getConsumeStatistics.json?";
    var legend = ['聊天付费人数', '聊天付费次数'];
    statis.stats($scope, $http, url, legend, 4, "consChar", "consDateRange");
    var getNowData = function () {
      $http.get(server + "/statistics/getConsumeNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
  });
