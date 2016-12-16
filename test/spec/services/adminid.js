'use strict';

describe('Service: adminId', function () {

  // load the service's module
  beforeEach(module('liveChatApp'));

  // instantiate service
  var adminId;
  beforeEach(inject(function (_adminId_) {
    adminId = _adminId_;
  }));

  it('should do something', function () {
    expect(!!adminId).toBe(true);
  });

});
