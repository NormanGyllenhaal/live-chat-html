'use strict';

describe('Controller: ReportsettingCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var ReportsettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportsettingCtrl = $controller('ReportsettingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportsettingCtrl.awesomeThings.length).toBe(3);
  });
});
