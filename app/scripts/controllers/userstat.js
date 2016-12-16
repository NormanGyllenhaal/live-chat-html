'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:UserstatCtrl
 * @description
 * # UserstatCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('UserstatCtrl', function ($scope, $http,server,adminId,statis,$location) {
    if(adminId.adminId==null){
      window.location.href = "login.html";
    }
    $scope.pageClass = 'page-home';
    var url = server + "/statistics/getUserStatistics.json?";
    var legend = ['总用户数量', 'facebook用户数量', '新增用户数量', '新增facebook用户数量'];
    statis.stats($scope, $http, url, legend, 1, "userChar", "userDateRange");
    var getNowData = function () {
      $http.get(server + "/statistics/findUserNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
  });



