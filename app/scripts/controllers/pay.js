'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:PayCtrl
 * @description
 * # PayCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('PayCtrl', function ($scope, $http,server,adminId,common,chatService, Pagination) {
    var getNowData = function () {
      $http.get(server + "/statistics/getPayStatDayNow.json?adminId=" + adminId.adminId).success(function (response) {
        $scope.nowData = response;
        console.log(response);
      });
    }
    getNowData();
    $scope.flush = function () {
      getNowData();
    }
    var url = server + "/statistics/getPayStat.json";
    $scope.param = {
      adminId: adminId.adminId,
      beginDate: common.format(common.addDay(-30)),
      endDate: common.format(common.addDay(1)),
      pageNo: 1,
      pageSize: 10
    }
    var legend = ['购买金币数', '购买金额', '购买次数'];
    $http.get(url, {params: $scope.param}).success(function (response) {
      console.log(response);
      $scope.data = response.list;
      $scope.goldNum = response.list[0].goldNum;
      $scope.money = response.list[0].money;
      $scope.count = response.list[0].count;
      $scope.page = response.page.list;
      $scope.item = common.getItemList(response);
      $scope.legend = legend;
      $scope.numData = common.getPayStat(response);
      chatService.chartShow($scope, "payChar");
      // 日历插件
      $('#payDateRange').val(common.format(common.addDay(-30)) + ' - ' + common.format(new Date()));
      $('#payDateRange').daterangepicker({
        locale: {
          format: 'YYYY-MM-DD'
        },
        startDate: common.format(common.addDay(-30)),
        endDate: common.format(new Date())
      }, function (start, end, label) {
        $scope.param.beginDate = start.format('YYYY-MM-DD');
        $scope.param.endDate = end.format('YYYY-MM-DD');
        console.log($scope.param);
        $http.get(url, {params: $scope.param}).success(function (resp) {
          console.log(resp);
          $scope.data = resp.list;
          $scope.page = resp.page.list;
          $scope.item = getItemList(resp);
          $scope.legend = legend;
          $scope.numData = getPayStat(resp);
          chatService.chartShow($scope, "payChar");
          reloadPage(resp);
        });
      });
      var reloadPage = function (resp) {
        var pagination = $scope.pagination = Pagination.create({
          itemsPerPage: 10,
          itemsCount: resp.page.count,
          maxNumbers: resp.page.pages
        });
        pagination.onChange = function (page) {
          $scope.param.pageNo = page;
          $http.get(server + "/statistics/getUserPayRecord.json", {params: $scope.param}).success(function (data) {
            console.log(data);
            $scope.page = data.list;
          });
          console.info('page=', page);
        }
      };
      reloadPage(response);
    })
  });
