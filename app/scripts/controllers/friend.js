'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:FriendCtrl
 * @description
 * # FriendCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('FriendCtrl', function ($scope, $http,server,adminId,statis,common) {
    $scope.pageClass = 'page-3';
    var url = server + "/statistics/getFriendStatistics.json?";
    var legend = ['匹配环节成为好友总人数', '匹配环节成为好友总次数'];
    statis.stats($scope, $http, url, legend, 3, "friChar", "friDateRange");
    var getNowData = function () {
      $http.get(server + "/statistics/getFriendNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
  });
