'use strict';

/**
 * @ngdoc function
 * @name liveChatApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the liveChatApp
 */
angular.module('liveChatApp')
  .controller('ImageCtrl', function ($scope, $http,server,adminId,Pagination, $location,common) {
    moment.locale('zh-cn');

    Array.prototype.remove = function (val) {
      for(var i=0;i<this.length;i++){
        if(angular.equals(val,this[i])){
          this.splice(i, 1);
        }
      }
    };
    var url = server + "/img/getImg.json?";
    var getArray = function (data) {
      var array = [];
      $.each(data.list, function (name, value) {
        array.push(new ImgChecked(value.id,value.version));
      });
      return array;
    }
    var ImgChecked = function (imgId,version,checked) {
      this.imgId = imgId;
      this.version = version;
      this.checked = checked;
    }
    var ImgDto = function (adminId, imgChecked, gender, type, pageNo, pageSize) {
      this.adminId = adminId;
      this.list = imgChecked;
      this.gender = gender;
      this.type = type;
      this.pageNo = pageNo;
      this.pageSize = pageSize;
    }

    var pageSize = 24;
    var beginDate = common.addDay(-1);
    var endDate = new Date();
    $scope.param = {adminId: adminId.adminId, pageNo: 1, pageSize: pageSize,beginDate:beginDate,endDate:endDate};
    //时间插件
    $scope.dateRangeStart = beginDate;
    $scope.dateRangeEnd = endDate;
    $scope.startDateOnSetTime = function (newDate, oldDate) {
      console.log(newDate);
      console.log($scope.dateRangeEnd);
      flushData(newDate,$scope.dateRangeEnd);
    }

    $scope.endDateOnSetTime = function (newDate, oldDate) {
      console.log($scope.dateRangeStart);
      console.log(newDate);
      flushData($scope.dateRangeStart,newDate);
    }
    var flushData = function (beginDate,endDate) {
      $scope.param = {adminId: adminId.adminId, pageNo: 1, pageSize: pageSize,beginDate:beginDate,endDate:endDate};
      $http.post(url, $scope.param).success(function (data) {
        console.log(data);
        $scope.imgList = data.list;
        $scope.allArray = getArray(data);
        console.log($scope.allArray);
        $scope.choseArr = [];
        $scope.x = false;
        $scope.master = false;
        $scope.pages = data.pages;
      });
    }

    $http.post(url, $scope.param).success(function (response) {
      $scope.imgList = response.list;
      console.log(response.list);
      $scope.pages = response.pages;
      $scope.allArray = getArray(response);//初始化数据
      $scope.choseArr = [];//定义数组用于存放前端显示
      $scope.x = false;//默认未选中
      $scope.master = false;
      $scope.chk = function (z, x,version) {//单选或者多选
        console.log(x);
        if (x == true) {//选中
          $("#"+z +"image").css("display","block");
          $scope.choseArr.push(new ImgChecked(z,version));
          console.log($scope.choseArr);
        } else {
          $("#"+z +"image").css("display","none");
          $scope.choseArr.remove(new ImgChecked(z,version));
          console.log($scope.choseArr);
        }
      };
      $scope.offUserAndDelete = function (userId,imageId) {
        console.log(userId + "," + imageId);
        $scope.deleteParam = {adminId: adminId.adminId, pageNo: 1, pageSize: pageSize,beginDate:beginDate,endDate:endDate,userId:userId,imageId:imageId};
        $http.post(server+ "/img/forbid.json", $scope.deleteParam).success(function (data) {
          console.log(data);
          $scope.imgList = data.list;
          $scope.allArray = getArray(data);
          $scope.choseArr = [];
          $scope.x = false;
          $scope.master = false;
          $scope.pages = data.pages;
          $location.path('/image');
        });
      }

      $('#gender-select').change(function () {
        selectUpdate();
      });

      $("#type-select").change(function () {
        selectUpdate();
      })
      var selectUpdate = function () {
        $http.post(url, $scope.param).success(function (data) {
          console.log(data);
          $scope.imgList = data.list;
          $scope.allArray = getArray(data);
          $scope.choseArr = [];
          $scope.x = false;
          $scope.master = false;
          $scope.pages = data.pages;
          $location.path('/image');
        });
      }

      $scope.next = function () {
        var array = [];
        if ($scope.choseArr[0] != "" || $scope.choseArr.length != 0) {
          for (var i = 0; i < $scope.choseArr.length; i++) {
            var imgChecked = new ImgChecked($scope.choseArr[i].imgId,$scope.choseArr[i].version, 2);
            array.push(imgChecked);
            $scope.allArray.remove($scope.choseArr[i]);
          }
        }
        for (var i = 0; i < $scope.allArray.length; i++) {
          var imgChecked = new ImgChecked($scope.allArray[i].imgId,$scope.allArray[i].version, 1);
          array.push(imgChecked);
        }

        var imgDto = new ImgDto(adminId.adminId, array, $scope.param.gender, $scope.param.type, 1, pageSize);
        checkImg(imgDto);
        console.log(imgDto);
      }

      var checkImg = function (imgDto) {
        $http.post(server + "/img/checkImg.json", imgDto).success(function (data) {
          console.log(data);
          $scope.imgList = data.list;
          $scope.allArray = getArray(data);
          $scope.choseArr = [];
          $scope.x = false;
          $scope.master = false;
          $scope.pages = data.pages;
          $location.path('/image');
        });
      };

    });
  });
