'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:DauCtrl
 * @description
 * # DauCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('DauCtrl', function ($scope, $http,server,adminId,common) {
    //var beginDate = format(addDay(-30));
    var date = common.format(new Date());
    $scope.pageClass = 'page-1';
    var url = server + "/statistics/getUserKeepDay.json?";
    var getNowData = function () {
      $http.get(server + "/statistics/getUserKeepNow.json?adminId=" + adminId.adminId).success(function (response) {
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
    $scope.param = {adminId: adminId.adminId,date: date};
    $http.get(server+"/statistics/getActiveUserHour.json",{params: $scope.param}).success(function (response) {
      var xArray = new Array();
      var boyArray = new Array();
      var girlArray = new Array();
      var yArray = new Array();
      var x = function(type,data,name){
        this.type = type;
        this.data = data;
        this.name = name;
      }
      var xData = new Array();
      $.each(response, function (name, value) {
        var date = new Date(value.createTime);
        xData.push(date.getHours());
        boyArray.push(value.boyActiveCount);
        girlArray.push(value.girlActiveCount);
      });
      xArray.push(new x('category',xData));
      yArray.push(new x("bar",boyArray,"男性"));
      yArray.push(new x("bar",girlArray,"女性"));
      console.log(xArray);
      console.log(response);
      char(xArray,yArray);
    });
    var char = function(xArray,yArray){
      var myChart = echarts.init(document.getElementById("dauChar"));
      var option = {
        title : {
          text: '用户当天活跃数据'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['男性','女性']
        },
        toolbox: {
          show : true,
          feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : xArray,
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : yArray
      };
      myChart.setOption(option);
      window.onresize = myChart.resize;
    }
  });
