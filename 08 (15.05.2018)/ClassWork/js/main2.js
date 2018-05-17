/*
function Task (title, description, startTime) {
    this.title = title;
    this.description = description;
    this.startTime = startTime;
}

Task.prototype.formatTime = function () {
    return this.startTime.getHours() + ":" +
        this.startTime.getMinutes();
}

var newTask = new Task("My title", 'description', new Date());
var newTask1 = new Task("My title1", 'description1', new Date());
var newTask2 = new Task("My title2", 'description2', new Date());




var arr = [newTask, newTask1, newTask2];

console.log(arr[0].formatTime());
console.log(arr[1].formatTime());
console.log(arr[2].formatTime());
*/

function animal(type) {
    this.type = type;
}

Animal.prototype.move = function () {
    console.log("Move");
}

function Dog() {
    this.legsCount = 4;
}

function Snake() {
    this.legsCount = 0;
}

Snake.prototype.move = function () {
    console.log("Move tale");
}

var dog = new Dog();
var dogOfFriend = new Dog();
dog.legsCount = 3;