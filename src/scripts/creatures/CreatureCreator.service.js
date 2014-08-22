(function() {

  'use strict';

  function CreatureCreator(Creature) {
    var creatureFactory = {};

    creatureFactory.generate = function generateCreature() {
      var creature = new Creature.Class();
      return creature;
    };

    return creatureFactory;
  }

  angular.module('creatures').factory('CreatureCreator', CreatureCreator);

})();