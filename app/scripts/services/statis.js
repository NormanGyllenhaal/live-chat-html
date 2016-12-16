'use strict';

/**
 * @ngdoc service
 * @name liveChatApp.statis
 * @description
 * # statis
 * Service in the liveChatApp.
 */
angular.module('liveChatApp')
  .service('statis', function (adminId,common,chatService) {
    this.stats = function ($scope, $http, url, legend, type, id, dateId) {
      var beginDate = common.format(common.addDay(-30));
      var endDate = common.format(common.addDay(1));
      $http.get(url + "adminId=" + adminId.adminId + "&beginDate=" + beginDate + "&endDate=" + endDate)
        .success(function (response) {
          console.log(response);
          $scope.data = response;
          if (type == 1) {
            $scope.newUserNum = response[0].newUserNum;
            $scope.userTotalNum = response[0].userTotalNum;
            $scope.userBoyNum = response[0].userBoyNum;
            $scope.userGirlNum = response[0].userGirlNum;
            $scope.numData = common.getNumData(response);
          } else if (type == 2) {
            var parseVideoTime = function (list) {
              $.each(list, function (name, value) {
                value.videoTime = common.formatSeconds(value.videoTime / 1000);
                value.matchVideoTime = common.formatSeconds(value.matchVideoTime / 1000);
                value.friendVideoTime = common.formatSeconds(value.friendVideoTime / 1000);
                value.threeChatAvgTime = common.formatSeconds(value.threeChatAvgTime / 1000);
              });
              return list;
            }
            $scope.data = parseVideoTime(response);
            $scope.videoTime = response[0].videoTime;
            $scope.videoPeople = response[0].videoPeople;
            $scope.matchVideoPeople = response[0].matchVideoPeople;
            $scope.matchVideoTime = response[0].matchVideoTime;
            $scope.numData = common.getNumDataVideo(response);
          } else if (type == 3) {
            $scope.videoBefriendCount = response[0].videoBefriendCount;
            $scope.videoBefriendNum = response[0].videoBefriendCount / 2;
            $scope.numData = common.getNumDataFriend(response);
          } else if (type == 4) {
            $scope.matchPagePayCount = response[0].matchPagePayCount;
            $scope.matchPagePayPeople = response[0].matchPagePayPeople;
            $scope.bodyPayCount = response[0].bodyPayCount;
            $scope.girlPayCount = response[0].girlPayCount;
            $scope.numData = common.getNumDataConsume(response);
          } else if (type == 5) {
            $scope.matchTotal = response[0].matchTotal;
            $scope.matchSuccess = response[0].matchSuccess;
            $scope.matchFail = response[0].matchFail;
            $scope.numData = common.getNumDataMatchNum(response);
            console.log($scope.numData);
          }
          $scope.item = common.getItem(response);
          $scope.legend = legend;
          chatService.chartShow($scope, id);
          // 日历插件
          $('#' + dateId).val(common.format(common.addDay(-30)) + ' - ' + common.format(new Date()));
          $('#' + dateId).daterangepicker({
            locale: {
              format: 'YYYY-MM-DD'
            },
            startDate: common.format(common.addDay(-30)),
            endDate: common.format(new Date())
          }, function (start, end, label) {
            console.log(start.format('YYYY-MM-DD'));
            console.log(end.format('YYYY-MM-DD'));
            $http.get(url + "adminId=" + adminId.adminId + "&beginDate=" + start.format('YYYY-MM-DD') + "&endDate=" + end.format('YYYY-MM-DD')).success(function (resp) {
              console.log(resp);
              $scope.data = resp;
              if (type == 1) {
                $scope.numData = common.getNumData(response);
              } else if (type == 2) {
                var parseVideoTime = function (list) {
                  $.each(list, function (name, value) {
                    value.videoTime = common.formatSeconds(value.videoTime / 1000);
                    value.matchVideoTime = common.formatSeconds(value.matchVideoTime / 1000);
                    value.friendVideoTime = common.formatSeconds(value.friendVideoTime / 1000);
                    value.threeChatAvgTime = common.formatSeconds(value.threeChatAvgTime / 1000);
                  });
                  return list;
                }
                $scope.data = parseVideoTime(response);
                $scope.numData =  common.getNumDataVideo(response);
              } else if (type == 3) {
                $scope.numData = common.getNumDataFriend(response);
              } else if (type == 4) {
                $scope.numData = common.getNumDataConsume(response);
              } else if (type == 5) {
                $scope.numData = common.getNumDataMatchNum(response);
              }
              $scope.item = common.getItem(resp);
              chatService.chartShow($scope, id);
            });
          });
        });
    }
  });
