'use strict';

/**
 * @ngdoc service
 * @name liveChatApp.chatService
 * @description
 * # chatService
 * Service in the liveChatApp.
 */
angular.module('liveChatApp')
  .service('chatService', function () {
    this.chartShow = function ($scope, id) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: $scope.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: $scope.item,
          axisLabel: {
            //X轴刻度配置
            //interval: //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
          }
        },
        yAxis: {
          type: 'value'
        },
        series: function () {
          var serie = [];
          for (var i = 0; i < $scope.legend.length; i++) {
            var item = {
              name: $scope.legend[i],
              type: 'line',
              data: $scope.numData[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.onresize = myChart.resize;
    }
  });
