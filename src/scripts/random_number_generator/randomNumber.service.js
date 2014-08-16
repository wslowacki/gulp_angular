'use strict';

function randomNumber(mathUtils) {
  /*jshint validthis: true */
  var _root = this;

  /**
   * Generates an integer between two values
   */
  function generateRandomNumber(minimumValue, maximumValue) {
    var generatedNumber;
    generatedNumber = Math.floor(Math.random() * (maximumValue - minimumValue)) + minimumValue;
    return generatedNumber;
  }

  _root.generate = function randomNumberWrapper(minimumValue, maximumValue) {
    var generatedNumber;
    try {
      if (!mathUtils.isInteger(minimumValue) || !mathUtils.isInteger(maximumValue)) {
        throw 'Number generator parameters are not integers';
      }
      generatedNumber = generateRandomNumber(minimumValue, maximumValue);
      return generatedNumber;
    } catch (e) {
      console.error(e);
    }
  };
}

angular.module('randomNumberGenerator').service('randomNumber', randomNumber);