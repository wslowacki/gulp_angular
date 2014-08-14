function mainController(fighterFactory, dice) {
  /*jshint validthis: true */
  var root = this;
  root.title = 'Some other title';
  root.isSparta = 'Leonida333' + fighterFactory.number + '!!!';
}

angular.module('App').controller('mainController', mainController);