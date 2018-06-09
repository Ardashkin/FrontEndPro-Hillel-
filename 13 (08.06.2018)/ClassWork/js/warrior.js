"use strict";

var Warrior = (function () {

    function Warrior(health, damage, distance) {
        Unit.call(this, 'Warrior', health || 500, damage || 300, distance || 1000);
    }

    Warrior.prototype = Object.create(Unit.prototype);
    Warrior.prototype.constructor = Warrior;
    return Warrior;
}());
