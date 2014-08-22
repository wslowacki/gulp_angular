describe('Creature creator is a factory based on Creature class', function() {
  var CreatureCreator, Creature;
  beforeEach(module('creatures'));
  beforeEach(inject(function(_CreatureCreator_) {
    CreatureCreator = _CreatureCreator_;
  }));
  beforeEach(inject(function(_Creature_) {
    Creature = _Creature_;
  }));

  it('Has a generator that returns objects of the Creature class', function() {
    var creature = CreatureCreator.generate();
    expect(creature instanceof Creature.Class).toBe(true);
  });
});