'use strict';

function AddedMetods(arr, callback) {

    this.map = function (arr, callback, thisArg) {
        var results = [];
        for (let i = 0; i < arr.length; i++) {
            results.push(callback.call(thisArg, arr[i], i, arr));
        }
        return results;
    };

    this.reduce = function (arr, callback, startValue) {
        var i, length = arr.length, result = startValue;
        for (i = 0; i < length; i = i + 1) {
            result = callback.call(null, result, arr[i], i, arr);
        }
        return result;
    };
};

    var data = [10, -4, 50, -9, 0];
    var data2 = [10, 20, 30, 40];
    var m  = new AddedMetods();

    console.log(
        m.map(data, function(currentValue) {
            return currentValue >= 0;
        })
    );

    console.log(
        m.reduce(data2, function(sum, curent) {
        return sum + curent;
        }, 0)
    );


