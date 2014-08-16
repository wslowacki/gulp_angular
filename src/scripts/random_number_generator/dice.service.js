'use strict';

function dice(mathUtils, randomNumber) {
  /*jshint validthis: true */
  var _root = this;

  function rollDice(sides) {
    return randomNumber.generate(1, sides);
  }

  _root.roll = function rollDiceWrapper(sides) {
    var diceRollResult;
    try {
      if (!mathUtils.isPositiveInteger(sides)) {
        console.log('should throw error');
        throw 'Number of dice sides is not a positive integer';
      }
      diceRollResult = rollDice(sides);
      return diceRollResult;
    } catch (e) {
      console.error(e);
    }
  };

  function rollManyDice(quantity, sides) {
    var diceRollResult = 0;
    for (var i = 0; i < quantity; i++) {
      diceRollResult = diceRollResult + _root.roll(sides);
    }
    return diceRollResult;
  }

  _root.rollMany = function rollManyDiceWrapper(quantity, sides) {
    var diceRollResult;
    try {
      if (!mathUtils.isPositiveInteger(quantity)) {
        throw 'Number of dice rolls is not a positive integer';
      }
      diceRollResult = rollManyDice(quantity, sides);
      return diceRollResult;
    } catch (e) {
      console.error(e);
    }
  };
}

angular.module('randomNumberGenerator').service('dice', dice);