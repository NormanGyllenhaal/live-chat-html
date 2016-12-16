'use strict';

describe('Controller: ApppushCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var ApppushCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApppushCtrl = $controller('ApppushCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApppushCtrl.awesomeThings.length).toBe(3);
  });
});
