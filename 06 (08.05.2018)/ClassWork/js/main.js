/*
var a = 2,
    b = 5;

function max() {
    console.log(a > b ? a : b);
}
max();

a = 15;
b = 12;

max();
*/
/*
var a = 2,
    b = 5;

function max(a, b) {
    console.log(a > b ? a : b);
}
max(a, b);
*/
/*
function max(a, b) {
    return a > b ? a : b;
}
console.log (max(12, 15));
*/
/*
function max(a, b, c) {
    if (typeof a === 'function') {
        return a(b, c);
    }
    return a > b ? a : b;
}

max (function (a, b) {
 return a[0] > b[0] ? a : b;
}, 'myString', 'secondString');
*/
/*
function getResult(arg) {
    return typeof arg === 'function'? arg() : arg)
}

function max(a, b) {
    var resOfA = getResult(a),
        resOfB = getResult(b);

    return resOfA > resOfB ? resOfA : resOfB;
}

    max (function () { return 6;},
        2
    );
*/
/*
function getNum() {
    return 20;
}
function getOtherNum() {
    return 1;
}

function max(a) {
    return function (b) {
        return a > b ? a : b;
    }
}
var a = max(2);

console.log(a(getNum()));
console.log(a(getOtherNum()));
*/
/*
function max(a, b) {
        return a > b ? a : b;
}

setTimeout(function () {
    var a = max(2, 5);
    console.log(a);
}, 3000);
*/
/*
function max(a, b) {
    return a > b ? a : b;
}

var timeID = setTimeout(function cb() {
    var a = max(2, 5);
    console.log(a);
    timeID = setTimeout(cb, 1000);
}, 1000);

console.log("Im Here");
setTimeout(function () {
    clearInterval()
})
*/

var d = new Date('11.27.1984');
console.log(d);

