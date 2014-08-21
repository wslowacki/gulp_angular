'use strict';

function randomNumber(mathUtils) {
  /*jshint validthis: true */
  var _root = this;

  /**
   * Generates an integer between equal or higher to minValue and equal or lower to maxValue
   * @param  {Number (Int)} minimumValue 
   * @param  {Number (Int)} maximumValue 
   * @return {Number (Int)}              
   */
  _root.generate = function generateRandomNumber(minimumValue, maximumValue) {
    var generatedNumber, valuesArray;
    if (!mathUtils.isInteger(minimumValue) || !mathUtils.isInteger(maximumValue)) {
      throw new Error('mathUtils : generateRandomNumber() : Number generator parameters are not integers');
    } else {
      valuesArray = [minimumValue, maximumValue].sort();
      generatedNumber = Math.floor(Math.random() * (valuesArray[1] - valuesArray[0])) + valuesArray[0];
      return generatedNumber;
    }
  };
}

angular.module('randomNumberGenerator').service('randomNumber', randomNumber);