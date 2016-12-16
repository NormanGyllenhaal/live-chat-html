'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:PushCtrl
 * @description
 * # PushCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('PushCtrl', function ($scope, $http,server,adminId,SweetAlert) {
    $scope.table = false;
    $scope.pageClass = 'page-2';
    var url = server + "/push/addPush.json?";
    /*$('.form_datetime').datetimepicker({
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      forceParse: 0,
      showMeridian: 1
    });*/
    var PushLanguage = function (languageId,context) {
      this.languageId = languageId;
      this.context = context;
    }
    $scope.reset = function () {
      var pushLanguages = new Array();
      pushLanguages.push(new PushLanguage(1,$scope.english));
      pushLanguages.push(new PushLanguage(2,$scope.chinese));
      pushLanguages.push(new PushLanguage(12,$scope.portugal));
      console.log($scope.push);
      $scope.push = {adminId: adminId.adminId,pushLanguages:pushLanguages,
        title:$scope.push.title,
        gold:$scope.push.gold,
        pushWay:$scope.push.pushWay,
        pushTime:$scope.push.pushTime,
        type:$scope.push.type,
        userIdList:$scope.push.userIdList};
      console.log($scope.push);
      $http.post(url, $scope.push).success(function (response) {
         console.log(response);
         if(response.status == 10000){
           SweetAlert.swal("成功", "成功添加了push任务", "success");
         }
      });
    };
    $scope.show = function () {
      $scope.param = {adminId: adminId.adminId}
      $http.get(server + "/push/getPushHistory.json", {params: $scope.param}).success(function (response) {
        $scope.table = true;
        console.log(response);
        $scope.list = response.list;
      })
    }
  });
