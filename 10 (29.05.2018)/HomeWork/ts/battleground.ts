import Archer from './archer';
import Warrior from './warrior';

var archer1 = new Archer(200, 70, 300),
    //archer2 = new Archer(500, 200, 40),
    //archer3 = new Archer(500, 431, 344),
    warrior1 = new Warrior(300, 200, 1000);


    warrior1.attackedBy(archer1);

console.log(archer1);
console.log(warrior1);

console.log('HEALTH', warrior1.health);

warrior1.restore();

console.log('HEALTH', warrior1.health);