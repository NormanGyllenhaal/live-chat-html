'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:ReportsettingCtrl
 * @description
 * # ReportsettingCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('ReportsettingCtrl', function ($scope, $http,server,adminId) {
    $scope.isShow = false;
    var url = server + "/reportSetting.json?";
    $http.get(url + "adminId=" + adminId.adminId).success(function (response) {
      console.log(response);
      $scope.list = response;
      $scope.modify = function (x) {
        $scope.isShow = true;
        console.log(x);
        $scope.reportSetting = x;
      }
      $scope.reset = function () {
        $http.put(server + "/reportSetting.json", $scope.reportSetting).success(function (data) {
          console.log(data);
          if (data[0]!= null) {
            $scope.list = data;
            $scope.isShow = false;
            ngTip.tip('修改成功', 'success');
          } else {
            ngTip.tip(data.msg, 'danger');
          }
        })
      }
    });
  });
