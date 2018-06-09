"use strict";

var Squad;
Squad = (function () {

    function Squad(squad) {
        if (squad instanceof Array) {
            this.squad = squad;
        } else {
            this.squad = new Array();
        }

    }

    Squad.prototype.addUnit = function (unit) {
        if ((unit instanceof Archer) ||
            (unit instanceof Warrior)||
            (unit instanceof Mage)||
            (unit instanceof Knight))
        this.squad.push(unit);
        throw Error ('That is not Unit');
    };

    Squad.prototype.getUnit = function (index) {
        if (isNaN(index) && !(index instanceof Number)) throw Error ('That is not Number');
        else return this.squad[index];
    };

    Squad.prototype.removeUnit = function (index) {
        if (isNaN(index) && !(index instanceof Number)) throw Error ('That is not Number');
        else return this.squad.splice(index, 1);
    };

    Squad.prototype.shuffle = function (){

    };

    return Squad;
}());


