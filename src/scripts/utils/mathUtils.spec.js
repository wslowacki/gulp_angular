describe("Checking if value is a number", function() {
  var mathUtils;
  beforeEach(module('utils.math'));
  beforeEach(inject(function(_mathUtils_) {
    mathUtils = _mathUtils_;
  }));

  it('Should return true for integers', function() {
    expect(mathUtils.isNumber(4)).toBe(true);
    expect(mathUtils.isNumber(0)).toBe(true);
    expect(mathUtils.isNumber(-4)).toBe(true);
  });

  it('Should return false for a string', function() {
    expect(mathUtils.isNumber('4')).toBe(false);
    expect(mathUtils.isNumber('')).toBe(false);
  });

  it('Should return false for object', function() {
    expect(mathUtils.isNumber({})).toBe(false);
    expect(mathUtils.isNumber({
      'thing': 4
    })).toBe(false);
  });

  it('Should return false for an array', function() {
    expect(mathUtils.isNumber([])).toBe(false);
    expect(mathUtils.isNumber([1, 2, 3])).toBe(false);
  });

  it('Should return false for boolean', function() {
    expect(mathUtils.isNumber(true)).toBe(false);
    expect(mathUtils.isNumber(false)).toBe(false);
  });

  it('Should return false for undefined or null', function() {
    expect(mathUtils.isNumber()).toBe(false);
    expect(mathUtils.isNumber(undefined)).toBe(false);
    expect(mathUtils.isNumber(null)).toBe(false);
  });
});

describe("Checking if value is an integer", function() {
  var mathUtils;
  beforeEach(module('utils.math'));
  beforeEach(inject(function(_mathUtils_) {
    mathUtils = _mathUtils_;
  }));

  it('Should return true for integers', function() {
    expect(mathUtils.isInteger(4)).toBe(true);
    expect(mathUtils.isInteger(0)).toBe(true);
    expect(mathUtils.isInteger(-4)).toBe(true);
  });

  it('Should return false for floats', function() {
    expect(mathUtils.isInteger(4.323)).toBe(false);
    expect(mathUtils.isInteger(0.23)).toBe(false);
    expect(mathUtils.isInteger(-4.323)).toBe(false);
  });
});

describe("Checking if value is positive", function() {
  var mathUtils;
  beforeEach(module('utils.math'));
  beforeEach(inject(function(_mathUtils_) {
    mathUtils = _mathUtils_;
  }));

  it('Should return true for positive values', function() {
    expect(mathUtils.isPositive(4)).toBe(true);
    expect(mathUtils.isPositive(0.00001)).toBe(true);
  });

  it('Should return false for zero', function() {
    expect(mathUtils.isPositive(0)).toBe(false);
  });

  it('Should return false for negative values', function() {
    expect(mathUtils.isPositive(-5)).toBe(false);
    expect(mathUtils.isPositive(-0.00001)).toBe(false);
  });
});

describe("Checking if value is a positive integer", function() {
  var mathUtils;
  beforeEach(module('utils.math'));
  beforeEach(inject(function(_mathUtils_) {
    mathUtils = _mathUtils_;
  }));

  it('Should return true for positive integer values', function() {
    expect(mathUtils.isPositiveInteger(4)).toBe(true);
    expect(mathUtils.isPositiveInteger(10000)).toBe(true);
  });

  it('Should return false for positive floats', function() {
    expect(mathUtils.isPositiveInteger(554.232)).toBe(false);
  });

  it('Should return false for zero', function() {
    expect(mathUtils.isPositiveInteger(0)).toBe(false);
  });

  it('Should return false for negative values', function() {
    expect(mathUtils.isPositiveInteger(-5)).toBe(false);
    expect(mathUtils.isPositiveInteger(-0.00001)).toBe(false);
  });
});