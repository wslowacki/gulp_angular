'use strict';

function mathUtils() {
  /*jshint validthis: true */
  var _root = this;

  _root.isNumber = function isNumber(number) {
    return typeof number === 'number';
  };

  _root.isInteger = function isInteger(number) {
    return _root.isNumber(number) && (Math.round(number) === number);
  };

  _root.isPositive = function isPositive(number) {
    return _root.isNumber(number) && (number > 0);
  };

  _root.isPositiveInteger = function isPositiveInteger(number) {
    return _root.isInteger(number) && _root.isPositive(number);
  };

}

angular.module('utils.math').service('mathUtils', mathUtils);