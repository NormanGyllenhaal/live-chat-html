'use strict';

/**
 * @ngdoc service
 * @name liveChatApp.adminId
 * @description
 * # adminId
 * Service in the liveChatApp.
 */
angular.module('liveChatApp')
  .service('adminId', function ($cookieStore) {
    this.adminId = $cookieStore.get("adminId");
  });
