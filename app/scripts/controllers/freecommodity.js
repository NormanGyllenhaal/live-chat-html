'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:FreecommodityCtrl
 * @description
 * # FreecommodityCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('FreecommodityCtrl', function ($scope, $http,server,adminId) {
    $scope.isShow = false;
    var url = server + "/freeCommodity.json?";
    $http.get(url + "adminId=" + adminId.adminId).success(function (response) {
      console.log(response);
      $scope.list = response;
      $scope.modify = function (x) {
        $scope.isShow = true;
        console.log(x);
        $scope.freeCommodity = x;
      }
      $scope.reset = function () {
        $http.post(server + "/freeCommodity.json", $scope.freeCommodity).success(function (data) {
          console.log(data);
          if (data[0]!= null) {
            $scope.list = data;
            $scope.isShow = false;
          } else {

          }
        })
      }
    });
  });
