function fighterFactory() {
  /*jshint validthis: true */
  var _root = this;

  _root.number = 100;
}

angular.module('App').service('fighterFactory', fighterFactory);