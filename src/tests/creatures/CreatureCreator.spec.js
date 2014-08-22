describe("Checking if value is a number", function() {
  var CreatureCreator;
  beforeEach(module('creatures'));
  beforeEach(inject(function(_CreatureCreator_) {
    CreatureCreator = _CreatureCreator_;
  }));

  it('Module is loading', function() {
    expect(true).toBeTruthy();
  });
});
