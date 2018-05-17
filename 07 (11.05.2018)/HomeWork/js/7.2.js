/*
Array.prototype.toNumber = function () {
    var curentArray = this.valueOf();
    return curentArray.filter(Number).map(Number);
*/

Array.prototype.toNumber = function() {
    var curentArray = this.valueOf();
    var arr = [];
    for (let i = 0; i < curentArray.length; i++) {
        if (!isNaN(curentArray[i])) {
            arr.push(Number(curentArray[i]));
        }
    }
    return arr;
};

var arr = [1, '3', 'asd', 4, true, false, {}];
console.log(arr.toNumber());