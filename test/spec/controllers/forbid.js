'use strict';

describe('Controller: ForbidCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var ForbidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForbidCtrl = $controller('ForbidCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForbidCtrl.awesomeThings.length).toBe(3);
  });
});
