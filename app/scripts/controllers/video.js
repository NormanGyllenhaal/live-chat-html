'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('VideoCtrl', function ($scope, $http,server,adminId,statis,common) {
    $scope.pageClass = 'page-2';
    var legend = ['视频通话总时间', '视频通话总人数', '匹配视频通话总时间', '匹配视频通话总人数'];
    var url = server + "/statistics/getVideoStatistics.json?";
    statis.stats($scope, $http, url, legend, 2, "videoChar", "videoDateRange");
    var getNowData = function () {
      $http.get(server + "/statistics/getVideoNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        $scope.nowData.videoTime = common.formatSeconds(response.videoTime / 1000);
        $scope.nowData.matchVideoTime =  common.formatSeconds(response.matchVideoTime / 1000);
        $scope.nowData.friendVideoTime =  common.formatSeconds(response.friendVideoTime / 1000);
        $scope.nowData.threeChatAvgTime =  common.formatSeconds(response.threeChatAvgTime / 1000);
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
  });
