'use strict';

describe('Controller: DauCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var DauCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DauCtrl = $controller('DauCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DauCtrl.awesomeThings.length).toBe(3);
  });
});
