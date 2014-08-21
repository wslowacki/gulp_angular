describe("Checking if number generator returns correct values", function() {
  var randomNumber;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_randomNumber_) {
    randomNumber = _randomNumber_;
  }));

  it('Should throw error if any of parameters is missing', function() {
    expect(function() {
      randomNumber.generate();
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, undefined);
    }).toThrow();

    expect(function() {
      randomNumber.generate(undefined, 33);
    }).toThrow();
  });

  it('Should throw error if any of parameters is not an number', function() {
    expect(function() {
      randomNumber.generate('string', 33);
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, 'string');
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, []);
    }).toThrow();

    expect(function() {
      randomNumber.generate([], 33);
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, {});
    }).toThrow();

    expect(function() {
      randomNumber.generate({}, 33);
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, null);
    }).toThrow();

    expect(function() {
      randomNumber.generate(null, 33);
    }).toThrow();

    expect(function() {
      randomNumber.generate(33, true);
    }).toThrow();

    expect(function() {
      randomNumber.generate(true, 33);
    }).toThrow();
  });

  it('Should throw error if any of parameters are floats', function() {
    expect(function() {
      randomNumber.generate(33, 1.234);
    }).toThrow();

    expect(function() {
      randomNumber.generate(45.1, 43);
    }).toThrow();
  });

  it('Should generate a value not lower than minimum and not higher than maximum', function() {
    var minValue = 10,
      maxValue = 11,
      result;
    result = randomNumber.generate(minValue, maxValue);

    expect(function() {
      randomNumber.generate(minValue, maxValue);
    }).not.toThrow();

    expect(result).not.toBeLessThan(minValue);

    expect(result).not.toBeGreaterThan(maxValue);
  });
});

xdescribe("Checking if number generator invokes itself if max < min", function() {
  var randomNumber, minimumValue, maximumValue;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_randomNumber_) {
    randomNumber = _randomNumber_;
    minimumValue = 30;
    maximumValue = 10;
    spyOn(randomNumber, 'generate');
    
  }));

  it('Should call itself with values reversed if max < min', function() {
    var result = randomNumber.generate(minimumValue, maximumValue);
    // console.log(randomNumber.generate.calls[1].args);
    expect(randomNumber.generate.calls.length).toEqual(2);
  });
});
