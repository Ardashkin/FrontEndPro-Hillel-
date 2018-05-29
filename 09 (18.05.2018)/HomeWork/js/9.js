'use strict';

function Resource (health, distance, damage) {
    this.health = health;
    this.distance = distance;
    this.damage = damage;
}
    Resource.prototype.isReadyToMove = function () {
        return (this.distance > 0);
    };

    Resource.prototype.isReadyToFight = function () {
        return (this.damage > 0);
    };

    Resource.prototype.attack = function(resource) {
        resource.health -= resource.damage;
    };
    //Resource.prototype.restore();

    Resource.prototype.clone = function() {
        return new this.constructor(this.health, this.damage, this.distance);
    };

    function Archer(health, distance, damage) {
        Resource.call(this, health, distance, damage);
    };
    Archer.prototype = Object.create(Resource.prototype);
    Archer.prototype.constructor = Archer;

    function Warrior(health, distance, damage) {
        Resource.call(this, health, distance, damage);
    };
    Warrior.prototype = Object.create(Resource.prototype);
    Warrior.prototype.constructor = Warrior;

var Archer1 = new Archer(100, 5, 5);
var Warrior1 = new Warrior(100, 20, 10);

console.log(Archer1);
console.log(Archer1.isReadyToMove());
//console.log(Warrior1.isReadyToFight());

//var Archer2 = Archer1.clone();
//var Warrior2 = Warrior1.clone();
//console.log(Archer2);
//console.log(Warrior2);
//console.log(Warrior1.attack(Archer1));

//var Archer3 = new Archer(100, 5, 5);
//console.log(Warrior2);
