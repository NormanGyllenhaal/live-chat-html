'use strict';

describe('Controller: ConsumeCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var ConsumeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsumeCtrl = $controller('ConsumeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsumeCtrl.awesomeThings.length).toBe(3);
  });
});
