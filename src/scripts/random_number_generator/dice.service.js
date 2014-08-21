'use strict';

function dice(mathUtils, randomNumber) {
  /*jshint validthis: true */
  var _root = this;

  _root.roll = function rollDice(sides) {
    var diceRollResult;
    if (!mathUtils.isPositiveInteger(sides)) {
      throw new Error('dice : rollDice() : Number of dice sides is not a positive integer');
    } else {
      diceRollResult = randomNumber.generate(1, sides);
      return diceRollResult;
    }
  };

  _root.rollMany = function rollManyDice(quantity, sides) {
    var diceRollResult = 0;
    if (!mathUtils.isPositiveInteger(quantity) || !mathUtils.isPositiveInteger(sides)) {
      throw new Error('dice : rollManyDice() : Parameters are not positive integers');
    } else {
      for (var i =0; i < quantity; i++) {
        diceRollResult = diceRollResult + _root.roll(sides);
      }
      return diceRollResult;
    }
  };
}

angular.module('randomNumberGenerator').service('dice', dice);