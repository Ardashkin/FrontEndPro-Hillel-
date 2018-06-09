"use strict";

var Unit = (function () {

    function Unit(type, health, damage, distance) {
        this.type = type;
        this.health = this.defaultHealth = health;
        this.damage = damage;
        this.distance = distance;
        this.level = 0;
    }

    Unit.prototype.isReadyToFight = function () {
        return this.health > 0;
    };

    Unit.prototype.restore = function () {
        this.health = this.defaultHealth;
    };

    Unit.prototype.prepareForAttack = function () {
        return this.damage + (this.level * this.damage);
    };

    Unit.prototype.attackedBy = function (target) {
        this.health -= target.prepareForAttack();
    };

    Unit.prototype.render = function () {
        var div = document.createElement('div'),
            header = document.createElement('header'),
            body = document.createElement('section'),
            footer = document.createElement('footer');

        header.innerHTML = this.level;
        body.innerHTML = this.health;
        footer.innerHTML = this.damage;

        div.appendChild(header);
        div.appendChild(body);
        div.appendChild(footer);

        var self = this;
        div.onclick = function (event) {
            body.innerHTML = self.health -= 100;
            console.log(self, event);
        }

        return div;
    }

    return Unit;
}());