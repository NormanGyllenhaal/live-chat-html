'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('ReportCtrl', function ($scope, $http,server,adminId,Pagination,$location) {
    Array.prototype.indexOf = function (val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
      }
      return -1;
    };


    Array.prototype.remove = function (val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };
    var url = server + "/report/getReport.json?";
    var getArray = function (data) {
      var array = [];
      $.each(data.list, function (name, value) {
        array.push(value.id);
      });
      return array;
    }
    var ReportHandle = function (reportId, result, description, handleWay) {
      this.reportId = reportId;
      this.result = result;
      this.description = description;
      this.handleWay = handleWay;
    }
    var Dto = function (adminId, imgChecked) {
      this.adminId = adminId;
      this.list = imgChecked;
    }

    $scope.param = {adminId: adminId.adminId, pageNo: 1, pageSize: 8};
    $http.get(url, {params: $scope.param}).success(function (response) {
      $scope.list = response.list;
      $scope.allArray = getArray(response);//初始化数据
      $scope.choseArr = [];//定义数组用于存放前端显示
      $scope.x = false;//默认未选中
      $scope.master = false;
      $scope.all = function (c, v) {//全选
        if (c == true) {
          $scope.x = true;
          $scope.choseArr = v;
        } else {
          $scope.x = false;
          $scope.choseArr = [];
        }
      };
      $scope.chk = function (z, x) {//单选或者多选
        if (x == true) {//选中
          $scope.choseArr.push(z);
          console.log($scope.choseArr);
        } else {
          $scope.choseArr.remove(z);
          console.log($scope.choseArr);
        }
      };
      $scope.deleteAll = function (id) {// 操作CURD
        if (id != undefined && id.length != 0) {
          handle(1, 3, id);
        } else {
          handle(1, 3);
        }
      };
      $scope.deleteHeadImg = function (id) {// 操作CURD
        if (id != undefined && id.length != 0) {
          handle(1, 1, id);
        } else {
          handle(1, 1);
        }
      };
      $scope.deleteBackground = function (id) {
        if (id != undefined && id.length != 0) {
          handle(1, 2, id);
        } else {
          handle(1, 2);
        }
      }
      $scope.pass = function (id) {
        if (id != undefined && id.length != 0) {
          console.log(id);
          handle(2, 4, id);
        } else {
          handle(2, 4);
        }
      }
      $scope.offUserAndDelete = function(id){
        if (id != undefined && id.length != 0) {
          console.log(id);
          handle(1, 5, id);
        } else {
          handle(1, 5);
        }
      }
      var handle = function (result, handleWay, id) {
        var array = [];
        if (id != undefined && id.length != 0) {
          var reportHandle = new ReportHandle(id, result, "", handleWay);
          array.push(reportHandle);
        } else {
          if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
            alert("请至少选中一条数据进行操作！")
            return;
          }
          ;
          for (var i = 0; i < $scope.choseArr.length; i++) {
            var reportHandle = new ReportHandle($scope.choseArr[i], result, "", handleWay);
            array.push(reportHandle);
          }
        }
        console.log(array);
        var dto = new Dto(adminId.adminId, array);
        console.log(dto);
        $http.post(server + "/report/handleReport.json", dto).success(function (data) {
          console.log(data);
          $scope.list = data.list;
          $scope.allArray = getArray(data);
          $scope.choseArr = [];
          $scope.x = false;
          $scope.master = false;
          $scope.pagination = Pagination.create({
            itemsPerPage: 8,
            itemsCount: data.count,
            maxNumbers: data.pages
          });
          var pagination = $scope.pagination = Pagination.create({
            itemsPerPage: 8,
            itemsCount: response.count,
            maxNumbers: response.pages
          });
          pagination.onChange = function (page) {
            $scope.param = {adminId: adminId.adminId, pageNo: page, pageSize: 8};
            $http.get(url, {params: $scope.param}).success(function (data) {
              console.log(data);
              $scope.list = data.list;
              $scope.allArray = getArray(data);
              $scope.choseArr = [];
              $scope.x = false;
              $scope.master = false;
            });
            console.info('page=', page);
          };
          $location.path('/report');
        });
      }

      console.log(response);
      var pagination = $scope.pagination = Pagination.create({
        itemsPerPage: 10,
        itemsCount: response.count,
        maxNumbers: response.pages
      });
      pagination.onChange = function (page) {
        $scope.param = {adminId: adminId.adminId, pageNo: page, pageSize: 8};
        $http.get(url, {params: $scope.param}).success(function (data) {
          console.log(data);
          $scope.list = data.list;
          $scope.allArray = getArray(data);
          $scope.choseArr = [];
          $scope.x = false;
          $scope.master = false;
        });
        console.info('page=', page);
      };
    });
  });
