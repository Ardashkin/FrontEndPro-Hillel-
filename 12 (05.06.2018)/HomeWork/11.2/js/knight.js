"use strict";

var Knight = (function () {

    function Knight(health, damage, distance) {
    Warrior.call(this, health || 500, damage || 800, distance || 1000);
    this.type = 'Knight';
    }

    Knight.prototype = Object.create(Warrior.prototype);
    Knight.prototype.constructor = Knight;
    return Knight;
}());