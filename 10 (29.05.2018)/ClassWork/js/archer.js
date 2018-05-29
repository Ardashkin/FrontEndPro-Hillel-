function Archer(health, damage, distance) {
    Unit.call(this, 'Archer', health || 200, damage || 300, distance || 500);
    this.arrows = 10;
}

Archer.prototype = Object.create(Unit.prototype);
Archer.prototype.constructor = Archer;

Archer.prototype.prepareForAttack = function () {
    this.reload();
    return Unit.prototype.prepareForAttack.call(this);
}

Archer.prototype.reload = function () {
    if (!this.arrows) throw 'There are no arrows!';
    this.arrows--;
}