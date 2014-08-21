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
    var generatedNumber;
    if (!mathUtils.isInteger(minimumValue) || !mathUtils.isInteger(maximumValue)) {
      throw new Error('mathUtils : generateRandomNumber() : Number generator parameters are not integers');
    } else {
      if(minimumValue > maximumValue) {
        //this swaps the values of min/max variables
        minimumValue = [maximumValue, maximumValue = minimumValue][0];
      }
      generatedNumber = Math.floor(Math.random() * (maximumValue - minimumValue)) + minimumValue;
      return generatedNumber;
    }
  };
}

angular.module('randomNumberGenerator').service('randomNumber', randomNumber);