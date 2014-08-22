describe('Checking if the creature Class has statistics and a proper general access to them : ', function() {
  var creature, Creature;

  beforeEach(module('creatures'));
  beforeEach(inject(function(_Creature_) {
    Creature = _Creature_;
  }));
  beforeEach(function() {
    creature = new Creature.Class();
  });

  it('Created variable is the instance of the Creature class', function() {
    expect(creature instanceof Creature.Class).toBe(true);
  });

  it('It keeps the statistics private and does not allow direct access to them', function() {
    expect(creature.statistics).toBe(undefined);
  });

  it('Returns statistics structure through a getter method', function() {
    var stats = creature.getStats();
    expect(typeof stats).toEqual('object');
  });

  it('Sets a statistics structure through a setter method', function() {
    var stats = {
      'movementSpeed': 6,
      'weaponSkill': 32,
      'lifePoints': 100
    };
    creature.setStats(stats);
    expect(creature.getStats()).toEqual(stats);
  });

});

describe('Checking if we can set and get particular stats of the creature : ', function() {
  var creature,
    Creature,
    stats = {
      'movementSpeed': 6,
      'weaponSkill': 32,
      'lifePoints': 100
    };

  beforeEach(module('creatures'));
  beforeEach(inject(function(_Creature_) {
    Creature = _Creature_;
  }));
  beforeEach(function() {
    creature = new Creature.Class();
    creature.setStats(stats);
  });

  it('Is able to get a particular existing stat of the creature', function() {
    var movementSpeed = creature.getStats('movementSpeed');

    expect(movementSpeed).toEqual(stats.movementSpeed);
  });

  it('If trying to get nonexistent stats, throw an error', function() {
    expect(function() {
      creature.getStats('thisDoesntExist');
    }).toThrow();
  });

  it('Is able to set a particular stat of the creature', function() {
    var newMovementSpeed = 4,
      movementSpeed;
    creature.setStats({
      'movementSpeed': newMovementSpeed
    });
    movementSpeed = creature.getStats('movementSpeed');
    expect(movementSpeed).toEqual(newMovementSpeed);
  })

  it('If trying to set a non-object value to settings, throw an error', function() {
    expect(function() {
      creature.setStats();
    }).toThrow();

    expect(function() {
      creature.setStats(null);
    }).toThrow();

    expect(function() {
      creature.setStats(1);
    }).toThrow();

    expect(function() {
      creature.setStats('string');
    }).toThrow();

    expect(function() {
      creature.setStats(true);
    }).toThrow();
  });

});
