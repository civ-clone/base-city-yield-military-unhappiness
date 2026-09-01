"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryUnhappiness = void 0;
const Unhappiness_1 = require("@civ-clone/base-city-yield-unhappiness/Unhappiness");
class MilitaryUnhappiness extends Unhappiness_1.default {
    constructor(value, unit) {
        super(value, unit.id());
        this._unit = unit;
        this.addKey('unit');
    }
    unit() {
        return this._unit;
    }
}
exports.MilitaryUnhappiness = MilitaryUnhappiness;
exports.default = MilitaryUnhappiness;
//# sourceMappingURL=MilitaryUnhappiness.js.map