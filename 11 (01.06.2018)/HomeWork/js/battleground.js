"use strict";

var Battleground = (function () {

    function Battleground(battleground) {
        if (battleground instanceof Array)
            this.battleground = battleground;
         else this.battleground = new Array();
    };

    Battleground.prototype.addSquad = function(squad){
        if (squad instanceof Squad)
            this.battleground.push(squad);
        else throw Error ('That is not Unit');
    };

    Battleground.prototype.fight = function() {

    };

    Battleground.prototype.removeSquad = function(index){
        if (isNaN(index) && !(index instanceof Number)) throw Error ('That is not Number');
        else return this.battleground.splice(index, 1);
    };

    return Battleground;
}());




var squad1 = new Squad();
squad1.addUnit(new Archer);
squad1.addUnit(new Warrior);
squad1.addUnit(new Mage);

var squad2 = new Squad();
squad2.addUnit(new Archer);
squad2.addUnit(new Mage);
squad2.addUnit(new Warrior);
console.log(squad1);
console.log(squad2);

var battleground = new Battleground();
battleground.addSquad(squad1);
battleground.addSquad(squad2);
battleground.removeSquad(0);
console.log(battleground);


//console.log(squad1.getUnit(0));

//squad1.removeUnit(1);
//console.log(squad1);
//squad1.addUnit(new Warrior);
//console.log(squad1);


// warrior1.attackedBy(archer2);
// console.log('HEALTH', warrior1.health);
// warrior1.restore();
// console.log('HEALTH', warrior1.health);