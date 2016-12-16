'use strict';

/**
 * @ngdoc service
 * @name liveChatApp.common
 * @description
 * # common
 * Service in the liveChatApp.
 */
angular.module('liveChatApp')
  .service('common', function () {
    this.format = function (date) {
      var fmt = "yyyy-MM-dd";
      var o = {
        "M+": date.getMonth() + 1,                 //月份
        "d+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    };
    this.addDay = function (days) {
      var d = new Date();
      d.setDate(d.getDate() + days);
      return d;
    };

    this.getNumData = function (response) {
      var userTotalNumArray = new Array();
      var facebookNumArray = new Array();
      var newUserNumArray = new Array();
      var newFacebookNumArray = new Array();
      var numData = new Array();
      $.each(response, function (name, value) {
        userTotalNumArray.push(value.userTotalNum);
        newUserNumArray.push(value.newUserNum);
        newFacebookNumArray.push(value.newFacebookNum);
        facebookNumArray.push(value.facebookNum);
      });
      numData.push(userTotalNumArray);
      numData.push(facebookNumArray);
      numData.push(newUserNumArray);
      numData.push(newFacebookNumArray);
      return numData;
    };


    this.formatSeconds =  function (value) {
      var theTime = parseInt(value);// 秒
      var theTime1 = 0;// 分
      var theTime2 = 0;// 小时
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
        }
      }
      var result = "" + parseInt(theTime) + "秒";
      if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分" + result;
      }
      if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "小时" + result;
      }
      return result;
    }


    this.getNumDataVideo = function (response) {
      var videoTimeArray = new Array();
      var videoPeopleArray = new Array();
      var matchVideoPeopleArray = new Array();
      var matchVideoTimeArray = new Array();
      var numData = new Array();
      $.each(response, function (name, value) {
        videoTimeArray.push(value.videoTime);
        videoPeopleArray.push(value.videoPeople);
        matchVideoPeopleArray.push(value.matchVideoPeople);
        matchVideoTimeArray.push(value.matchVideoTime);
      });
      numData.push(videoTimeArray);
      numData.push(videoPeopleArray);
      numData.push(matchVideoPeopleArray);
      numData.push(matchVideoTimeArray);
      return numData;
    };

    this.getPayStat = function (response) {
      var goldNumArray = new Array();
      var moneyArray = new Array();
      var countArray = new Array();
      var numData = new Array();
      $.each(response.list, function (name, value) {
        goldNumArray.push(value.goldNum);
        moneyArray.push(value.money);
        countArray.push(value.count);
      })
      numData.push(goldNumArray);
      numData.push(moneyArray);
      numData.push(countArray);
      return numData;
    }


    this.getNumDataFriend = function (response) {
      var videoBefriendCountArray = new Array();
      var videoBefriendNumArray = new Array();
      var numData = new Array();
      $.each(response, function (name, value) {
        videoBefriendCountArray.push(value.videoBefriendCount);
        videoBefriendNumArray.push(value.videoBefriendCount * 2);
      });
      numData.push(videoBefriendCountArray);
      numData.push(videoBefriendNumArray);
      return numData;
    };

    this.getNumDataConsume = function (response) {
      var matchPagePayCountArray = new Array();
      var matchPagePayPeopleArray = new Array();
      var numData = new Array();
      $.each(response, function (name, value) {
        matchPagePayCountArray.push(value.matchPagePayCount);
        matchPagePayPeopleArray.push(value.matchPagePayPeople);
      });
      numData.push(matchPagePayCountArray);
      numData.push(matchPagePayPeopleArray);
      return numData;
    };

    this.getNumDataMatchNum = function (response) {
      var matchTotal = new Array();
      var matchSuccess = new Array();
      var matchFail = new Array();
      var numData = new Array();
      $.each(response, function (name, value) {
        matchTotal.push(value.matchTotal);
        matchSuccess.push(value.matchSuccess);
        matchFail.push(value.matchFail);
      });
      numData.push(matchTotal);
      numData.push(matchSuccess);
      numData.push(matchFail);
      return numData;
    };


    this.getItem = function (response) {
      var xaxisArray = new Array();
      $.each(response, function (name, value) {
        xaxisArray.push(value.createTime);
      });
      return xaxisArray;
    };

    this.getItemList = function (response) {
      var xaxisArray = new Array();
      $.each(response.list, function (name, value) {
        var date = new Date();
        date.setTime(value.createTime);
        xaxisArray.push(date.toLocaleDateString());
      });
      return xaxisArray;
    };

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
  });
