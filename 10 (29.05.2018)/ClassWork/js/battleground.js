
var archer1 = new Archer(500, 450, 30),
    archer2 = new Archer(500, 200, 40),
    archer3 = new Archer(500, 431, 344),
    warrior1 = new Warrior(700, 230, 1231),
    mage1 = new Mage(),
    knight1 = new Knight();

mage1.attackedBy(archer2);

console.log('HEALTH', mage1.health);

mage1.restore();

console.log('HEALTH', mage1.health);