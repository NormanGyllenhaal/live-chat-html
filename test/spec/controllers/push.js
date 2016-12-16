'use strict';

describe('Controller: PushCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var PushCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PushCtrl = $controller('PushCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PushCtrl.awesomeThings.length).toBe(3);
  });
});
