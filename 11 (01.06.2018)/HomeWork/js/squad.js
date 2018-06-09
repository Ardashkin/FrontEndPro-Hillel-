"use strict";

var Squad = (function () {

    function Squad(squad) {
        if (squad instanceof Array)
            this.squad = squad;
        else this.squad = new Array();
    };

    Squad.prototype.addUnit = function (unit) {
        if ((unit instanceof Archer) ||
            (unit instanceof Warrior)||
            (unit instanceof Mage)||
            (unit instanceof Knight))
        this.squad.push(unit);
        else throw Error ('That is not Unit');
    };

    Squad.prototype.getUnit = function (index) {
        if (isNaN(index) && !(index instanceof Number)) throw Error ('That is not Number');
        else return this.squad[index];
    };

    Squad.prototype.removeUnit = function (index) {
        if (isNaN(index) && !(index instanceof Number)) throw Error ('That is not Number');
        else return this.squad.splice(index, 1);
    };

    Squad.prototype.shuffle = function () {
        for (let i = this.squad.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.squad[i];
            this.squad[i] = this.squad[j];
            this.squad[j] = temp;
            }
            return this.squad;
        };

    return Squad;
}());


