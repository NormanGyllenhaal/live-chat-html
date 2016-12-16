'use strict';

describe('Controller: OffusertotalCtrl', function () {

  // load the controller's module
  beforeEach(module('liveChatApp'));

  var OffusertotalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffusertotalCtrl = $controller('OffusertotalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OffusertotalCtrl.awesomeThings.length).toBe(3);
  });
});
