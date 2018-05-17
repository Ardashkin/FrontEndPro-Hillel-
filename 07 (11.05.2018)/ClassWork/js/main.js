/*
var arr = [{a:5}, {a:5}, {a:5}];

var res = arr.reduce( function (prev, next) {
    return prev.a + next.a;
}, 0);

console.log(res);
*/
/*
someVarible = 5;
console.log(someVarible);
*/
//console.dir(String.prototype);
/*
 Boolean.prototype.toNumber = function () {
     return Number(this.valueOf());
 }
console.log(false.toNumber());
*/

var time = document.getElementById("time"),
    currentDate = new Date(),
    interval = 1000,
    task = {startTime : new Date(),
            title : "My Tasks",
            formatDate: function () {
                return this.startTime.getHours() + ":" +
                       this.startTime.getMinutes() + ":" +
                       this.startTime.getSeconds();
            }},
    myTasks = [task];

task.startTime.setSeconds(currentDate.getSeconds()+3);

function formatDate(date) {
    return date.getHours() + ":" +
           date.getMinutes() + ":" +
           date.getSeconds();
}

function filterCurrentTasks(currentDate, tasks) {
    return tasks.filter(function (task) {
        return currentDate >= task.startTime;
    })
}

function notifyHTML(tasks) {
    tasks.forEach(function (task) {
        taskBlock.innerHTML = task.title + "-"  +task.formatDate();
    })
}

function runClock(blockToRender, intervalConst, myTasks) {
    setInterval( function tick() {
        var d = new Date();
        var currentTasks = filterCurrentTasks(d, myTasks);
        blockToRender.innerHTML = formatDate(d);
        notifyHTML(currentTasks);
    }, intervalConst);
}

runClock(time, interval, myTasks);