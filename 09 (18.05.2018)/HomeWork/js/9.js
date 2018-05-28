'use strict';

function Resource (health, distance, damage) {
    this.health = health;
    this.distance = distance;
    this.damage = damage;
}
    Resource.prototype.isReadyToMove = function () {
        if (this.distance > 0) return true;
        else return false;
    };

    Resource.prototype.isReadyToFight = function () {
        if (this.damage > 0) return true;
        else return false;
    };

    Resource.prototype.attack = function(resource) {
        this.resource.health -= resource.damage;
    };
    //Resource.prototype.restore();

    Resource.prototype.clone = function() {
        var objCloned = Object.create(Resource.prototype);
        for (var prop in this){
            if (typeof this[prop] !== 'function')
                objCloned[prop] = this[prop];
        }
        return objCloned;
    };

    function Archer(health, distance, damage) {
        Resource.call(this, health, distance, damage);
    };

    function Warrior(health, distance, damage) {
        Resource.call(this, health, distance, damage);
    };

var Archer1 = new Archer(100, 5, 5);
var Warrior1 = new Warrior(100, 20, 10);

console.log(Archer1);
//console.log(Archer1.isReadyToMove());
//console.log(Warrior1.isReadyToFight());

var Archer2 = Archer1.clone();
//console.log(Archer2);
console.log(Warrior1);
console.log(Warrior1.attack(Archer1));
