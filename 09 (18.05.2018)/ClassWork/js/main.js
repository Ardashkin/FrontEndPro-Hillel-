function Animal(animalClass){
    this.animalClass = animalClass;
}
Animal.prototype.move = function () {
   console.log("run");
};

var animal = new Animal("mammal");

function Dog(){
    Animal.call(this, "mammal");
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.attack = function () {
    console.log("bite");
}

function Kangaroo(){}

Kangaroo.prototype.attack = function () {
    console.log("box");
}
function Snake(){}

Snake.prototype.attack = function () {
    console.log("bite");
}

console.log(animal);