'use strict';

describe('Service: userStatsService', function () {

  // load the service's module
  beforeEach(module('liveChatApp'));

  // instantiate service
  var userStatsService;
  beforeEach(inject(function (_userStatsService_) {
    userStatsService = _userStatsService_;
  }));

  it('should do something', function () {
    expect(!!userStatsService).toBe(true);
  });

});
