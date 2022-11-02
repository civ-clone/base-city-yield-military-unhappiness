import Unhappiness from '@civ-clone/base-city-yield-unhappiness/Unhappiness';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';

export class MilitaryUnhappiness extends Unhappiness {
  #unit: Unit;

  constructor(value: number | Yield, unit: Unit) {
    super(value, unit.id());

    this.#unit = unit;
  }

  unit(): Unit {
    return this.#unit;
  }
}

export default MilitaryUnhappiness;
