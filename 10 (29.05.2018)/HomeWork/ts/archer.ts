import Unit from './unit';

export default class Archer extends Unit {

    type: string = "Archer";
    arrows: number = 10;

     constructor(public health: number = 100,
                 public damage: number = 50,
                 public distance: number = 100,
                 public level: number = 0,
     )
     {
         super(health, damage, distance, level);
     }

    prepareForAttack(){
        this.reload();
        return Unit.prototype.prepareForAttack.call(this);
    }

    reload(){
        if (!this.arrows) throw 'There are no arrows!';
        this.arrows--;
    }
}