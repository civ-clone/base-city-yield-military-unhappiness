"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MilitaryUnhappiness_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryUnhappiness = void 0;
const Unhappiness_1 = require("@civ-clone/base-city-yield-unhappiness/Unhappiness");
class MilitaryUnhappiness extends Unhappiness_1.default {
    constructor(value, unit) {
        super(value, unit.id());
        _MilitaryUnhappiness_unit.set(this, void 0);
        __classPrivateFieldSet(this, _MilitaryUnhappiness_unit, unit, "f");
        this.addKey('unit');
    }
    unit() {
        return __classPrivateFieldGet(this, _MilitaryUnhappiness_unit, "f");
    }
}
exports.MilitaryUnhappiness = MilitaryUnhappiness;
_MilitaryUnhappiness_unit = new WeakMap();
exports.default = MilitaryUnhappiness;
//# sourceMappingURL=MilitaryUnhappiness.js.map