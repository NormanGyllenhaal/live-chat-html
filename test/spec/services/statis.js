'use strict';

describe('Service: statis', function () {

  // load the service's module
  beforeEach(module('liveChatApp'));

  // instantiate service
  var statis;
  beforeEach(inject(function (_statis_) {
    statis = _statis_;
  }));

  it('should do something', function () {
    expect(!!statis).toBe(true);
  });

});
