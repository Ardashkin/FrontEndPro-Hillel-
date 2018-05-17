;
function HoursPassed() {
    var userDate = Date.parse(prompt("Введите дату в формате YYYY-MM-DD")),
        now = new Date(),
        result;

    result = (now-userDate)/1000/60/60 - now.getTimezoneOffset()/60;
    alert("С введенной даты прошло " + (Math.floor(result)) + " часов");
}

function Clock(object) {
    var clock = new Date(),
        hours = clock.getHours(),
        minute = clock.getMinutes(),
        second = clock.getSeconds();
    document.getElementById('time').value = hours+":"+minute+":"+second;

    if (object.time <= clock)
        console.log(object.title);
    setTimeout(function() {Clock(object)},1000)
}

var task1 = { title: "Learn CSS", description: "You need start learning CSS", time: new Date(2018,4,10,21,27)},
    task2 = { title: "Learn HMTL", description: "You need start learning HTML", time: new Date(2018,4,10,17,10,)},
    task3 = { title: "Relax", description: "You need relax", time: new Date(2018,4,10,17,10,)};

Clock(task1);
Clock(task2);
Clock(task3);