function Unit(type, health, damage, distance) {
    this.type = type;
    this.health = this.defaultHealth = health;
    this.damage = damage;
    this.distance = distance;
    this.level = 0;
}

Unit.prototype.isReadyToFight = function () {
    return this.health > 0;
}

Unit.prototype.restore = function() {
    this.health = this.defaultHealth;
}

Unit.prototype.prepareForAttack = function () {
    return this.damage + (this.level * this.damage);
}

Unit.prototype.attackedBy = function (target) {
    this.health -= target.prepareForAttack();
}