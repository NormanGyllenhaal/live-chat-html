'use strict';

describe('Controller: UserstatsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var UserstatsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserstatsctrlCtrl = $controller('UserstatsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserstatsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
