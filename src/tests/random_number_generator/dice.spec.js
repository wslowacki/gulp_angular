describe("Checking if single dice roll return correct values", function() {
  var dice;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_dice_) {
    dice = _dice_;
  }));

  it('Should throw error if number of sides is not a positive integer', function() {
    expect(function() {
      dice.roll();
    }).toThrow();

    expect(function() {
      dice.roll(null);
    }).toThrow();

    expect(function() {
      dice.roll({});
    }).toThrow();

    expect(function() {
      dice.roll([]);
    }).toThrow();

    expect(function() {
      dice.roll(true);
    }).toThrow();

    expect(function() {
      dice.roll('string');
    }).toThrow();

    expect(function() {
      dice.roll(0);
    }).toThrow();

    expect(function() {
      dice.roll(-1);
    }).toThrow();

    expect(function() {
      dice.roll(1.25);
    }).toThrow();
  });

  it('Should return a positive integer', function() {
    var rollResult,
        roundedResult;

    rollResult = dice.roll(6);
    roundedResult = Math.round(rollResult);

    expect(rollResult).toBeGreaterThan(0);
    expect(rollResult).toEqual(roundedResult);
  });
});

describe("Checking if multiple dice roll throw errors if called with improper arugments", function() {
  var dice;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_dice_) {
    dice = _dice_;
  }));

  it('Should throw error if number of rolls is not a positive integer', function() {
    expect(function() {
      dice.rollMany(undefined, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany(null, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany({}, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany([], 6);
    }).toThrow();

    expect(function() {
      dice.rollMany(true, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany('string', 6);
    }).toThrow();

    expect(function() {
      dice.rollMany(0, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany(-1, 6);
    }).toThrow();

    expect(function() {
      dice.rollMany(1.25, 6);
    }).toThrow();
  });

  it('Should throw error if number of dice sides is not a positive integer', function() {
    expect(function() {
      dice.rollMany(1, undefined);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, null);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, {});
    }).toThrow();

    expect(function() {
      dice.rollMany(1, []);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, true);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, 'string');
    }).toThrow();

    expect(function() {
      dice.rollMany(1, 0);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, -1);
    }).toThrow();

    expect(function() {
      dice.rollMany(1, 1.25);
    }).toThrow();
  });
});

describe("Checking if multiple dice roll doesn't call dice roll if it throws error", function() {
  var dice;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_dice_) {
    dice = _dice_;
    spyOn(dice, 'roll');
    try {
      dice.rollMany('string');
      dice.rollMany(null);
      dice.rollMany(false);
      dice.rollMany({});
      dice.rollMany();
      dice.rollMany([]);
      dice.rollMany(-3);
      dice.rollMany(0);
      dice.rollMany(2.33, 3);
    } catch (e) {}
  }));

  it('Should not make a roll if an error is thrown', function() {
    expect(dice.roll).not.toHaveBeenCalled();
  });
});

describe("Checking if multiple dice roll calls dice roll correct number of times", function() {
  var dice, rollQuantity, diceSides;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_dice_) {
    rollQuantity = 3;
    diceSides = 6;
    dice = _dice_;
    spyOn(dice, 'roll');
    dice.rollMany(rollQuantity, diceSides);
  }));

  it('Should call dice roll a proper number of times', function() {
    expect(dice.roll.calls.count()).toEqual(rollQuantity);
  });
});

describe("Checking if multiple dice roll calls dice roll witch correct parameter", function() {
  var dice, rollQuantity, diceSides;
  beforeEach(module('randomNumberGenerator'));
  beforeEach(inject(function(_dice_) {
    rollQuantity = 3;
    diceSides = 6;
    dice = _dice_;
    spyOn(dice, 'roll');
    dice.rollMany(rollQuantity, diceSides);
  }));

  it('Should call dice roll a proper dice sides parameter', function() {
    expect(dice.roll.calls.argsFor(0)).toEqual([diceSides]);
  });
})
