'use strict';

describe('Controller: OffuserCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var OffuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffuserCtrl = $controller('OffuserCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OffuserCtrl.awesomeThings.length).toBe(3);
  });
});
