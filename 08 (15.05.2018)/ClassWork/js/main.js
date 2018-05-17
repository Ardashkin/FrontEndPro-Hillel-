/*
Array.prototype.toNumber = function () {
    var curentArray = this.valueOf();
    return curentArray.filter(Number).map(Number);

    /*
    var arr = [];
    for (let i = 0; i <curentArray.length; i++) {
        if (isNaN(curentArray[i])){
            arr.push(Number(curentArray[i]));
        }
        return arr;
    }

};

function map(array, cb) {
    var arr = this.valueOf();
    var arr = [];
    for (let i = 0, i < array.length, i++) {
        if (cb(array[i]), i, array) {
            arr.push(array[i]);
        }
    }

}





var arr = [1, 2, 'string', '2'];
console.log(arr.toNumber());
*/

function createTask(title) {
    return {
        title : title,
        startTime : new Date(),
        formatDate: function () {
            return this.startTime.getHours() + ":" +
                this.startTime.getMinutes() + ":" +
                this.startTime.getSeconds();
        },
        isCurrent (currentDate) {
            return currentDate = this.startTime;
        },
        resetStartTime() {
            this.startTime.setTime(this.defaultStartTime.getTime());
        },
        increeseSeconds (by) {
            var currentDate = new Date();
            this.startTime.setSeconds(currentDate.getSeconds() + by);
        }
    }

}
var task = createTask("My Task");
task.increeseSeconds(2);
console.log(task);