'use strict';

describe('Service: cons', function () {

  // load the service's module
  beforeEach(module('liveChatApp'));

  // instantiate service
  var cons;
  beforeEach(inject(function (_cons_) {
    cons = _cons_;
  }));

  it('should do something', function () {
    expect(!!cons).toBe(true);
  });

});
