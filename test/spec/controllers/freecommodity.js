'use strict';

describe('Controller: FreecommodityCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var FreecommodityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FreecommodityCtrl = $controller('FreecommodityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FreecommodityCtrl.awesomeThings.length).toBe(3);
  });
});
