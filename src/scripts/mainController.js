function mainController(dice, randomNumber) {
  /*jshint validthis: true */
  var _root = this;
  _root.numberOfDice = 2;
  _root.diceType = 6;
  _root.rollResult = null;

  _root.roll = function rollDice() {
    _root.rollResult = _root.numberOfDice ? dice.rollMany(_root.numberOfDice, _root.diceType) : dice.roll(_root.diceType);
    // _root.rollResult = randomNumber.generate();
  };

}

angular.module('App').controller('mainController', mainController);