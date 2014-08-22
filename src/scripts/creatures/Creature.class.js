(function() {

  'use strict';

  function Creature() {
    this.Class = function() {
      var statistics = {};

      this.setStats = function(stats) {
        if (!stats || typeof stats !== 'object') {
          throw new Error('Creature.setStats : invalid perameter', stats);
        } else {
          angular.extend(statistics, stats);
        }
      };

      this.getStats = function(stat) {
        var singleStat;
        if (stat) {
          singleStat = statistics[stat];
          if (singleStat) {
            return singleStat;
          } else {
            throw new Error('Creature.getStats : undefined statistic');
          }
        } else {
          return statistics;
        }
      };
    };
  }

  angular.module('creatures').service('Creature', Creature);

})();
