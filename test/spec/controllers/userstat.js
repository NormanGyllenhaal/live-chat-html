'use strict';

describe('Controller: UserstatCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var UserstatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserstatCtrl = $controller('UserstatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserstatCtrl.awesomeThings.length).toBe(3);
  });
});
