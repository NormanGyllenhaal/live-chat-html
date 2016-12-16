'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:ForbidCtrl
 * @description
 * # ForbidCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('ForbidCtrl', function ($scope, $http,server,adminId,SweetAlert) {
    $scope.pageClass = 'page-1';
    var url = server + "/report/reportRecord.json?";
    $http.get(url + "adminId=" + adminId.adminId).success(function (response) {
      $scope.list = response;
      console.log(response);
    });
    $scope.deleteImage = function (userId,type) {
      $scope.param = {userId:userId,type:type}
      $http.post(server+"/report/image.json",$scope.param).success(function (response) {
        $scope.list = response;
        console.log(response);
      })
    }
    $scope.addForbidTime = function (userId) {
      $http.put(server+"/report/forbid/"+userId,48).success(function (response) {
        if(response==""){
          SweetAlert.swal("成功", "延长了该用户禁用时间48小时", "success");
        }
        console.log(response);
      });
    }
  });
