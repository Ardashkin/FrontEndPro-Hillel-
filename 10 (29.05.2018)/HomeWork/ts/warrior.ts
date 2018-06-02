import Unit from './unit';

export default class Warrior extends Unit {

    type: string = "Warrior";

    constructor(public health: number = 500,
                public damage: number = 100,
                public distance: number = 1000,
                public level: number = 1,
    )
    {
        super(health, damage, distance, level);
    }
}