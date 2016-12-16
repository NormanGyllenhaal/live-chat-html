'use strict';

describe('Controller: AppversionCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var AppversionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppversionCtrl = $controller('AppversionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppversionCtrl.awesomeThings.length).toBe(3);
  });
});
