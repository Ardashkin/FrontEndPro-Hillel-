/*
var obj = { a : 2},
    arr = [2],
    str = 'string';

var newObject = obj,
    newArr =  arr,
    newStr =  str;
*/
/*
var arr = [ 1, 2, 3, 4 ];
arr[arr.length+2] = arr[arr.length - 1] + 1;
console.log(arr);
*/

var num = 23;

function logNum (num) {
    console.log(num);
}

function bootstrapper(cb, arg) {
    cb(arg);
}

bootstrapper(logNum, num);

