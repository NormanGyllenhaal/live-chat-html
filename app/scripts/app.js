'use strict';

/**
 * @ngdoc overview
 * @name liveChatApp
 * @description
 * # liveChatApp
 *
 * Main module of the application.
 */
angular
  .module('liveChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularPagination',
    'ui.bootstrap.datetimepicker',
    'oitozero.ngSweetAlert',
    'me-pageloading'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/userStats.html',
        controller: 'UserstatCtrl'
      })
      .when('/videoStats', {
        templateUrl: 'views/videoStats.html',
        controller: 'VideoCtrl'
      })
      .when('/friStats', {
        templateUrl: 'views/friStats.html',
        controller: 'FriendCtrl'
      })
      .when('/consStats', {
        templateUrl: 'views/consStats.html',
        controller: 'ConsumeCtrl'
      })
      .when('/matchNum', {
        templateUrl: 'views/matchNum.html',
        controller: 'MatchCtrl'
      })
      .when('/push', {
        templateUrl: 'views/push.html',
        controller: 'PushCtrl'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .when('/image', {
        templateUrl: 'views/image.html',
        controller: 'ImageCtrl'
      })
      .when('/setting', {
        templateUrl: 'views/setting.html',
        controller: 'settingController'
      })
      .when('/payStat', {
        templateUrl: 'views/payStat.html',
        controller: 'PayCtrl'
      })
      .when('/appVersion', {
        templateUrl: 'views/appVersion.html',
        controller: 'AppversionCtrl'
      })
      .when('/dau', {
        templateUrl: 'views/dau.html',
        controller: 'DauCtrl'
      })
      .when('/freeCommodity', {
        templateUrl: 'views/freeCommodity.html',
        controller: 'FreecommodityCtrl'
      })
      .when('/reportSetting', {
        templateUrl: 'views/reportSetting.html',
        controller: 'ReportsettingCtrl'
      })
      .when('/forbid', {
        templateUrl: 'views/forbid.html',
        controller: 'ForbidCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
