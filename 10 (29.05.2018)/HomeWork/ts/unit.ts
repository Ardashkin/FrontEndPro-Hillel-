export default class Unit{

    defaultHealth: number = this.health;

    constructor(public health: number,
                public damage: number,
                public distance: number,
                public level: number = 0){
    }

    isReadyToFight(){
        return this.health > 0;
    }

    restore(){

        this.health = this.defaultHealth;
    }

    prepareForAttack(){
        return this.damage + (this.level * this.damage);
    }

    attackedBy(target){
        this.health -= target.prepareForAttack();
    }
}