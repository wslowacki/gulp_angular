describe("Checking if number generator returns correct values", function() {
  var randomNumber;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_randomNumber_) {
    randomNumber = _randomNumber_;
    generate = randomNumber.generate;
  }));

  it('Should throw error if any of parameters is missing', function() {
    expect(function() {
      generate();
    }).toThrow();
  });
});