'use strict';

function AddedMetods(arr, callback) {
        this.each = function (arr, callback, thisArg) {
        for (let i = 0; i < arr.length; i++) {
            callback.call(thisArg, arr[i], i, arr);
            }
        };
        this.every  = function (arr, callback, thisArg) {
        for (let i = 0; i < arr.length; i++) {
            if (!callback.call(thisArg, arr[i], i, arr)) {
                return false;
            }
        }
        return true;
        };

        this.some = function (arr, callback, thisArg) {
        for (let i = 0; i < arr.length; i++) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                return true;
            }
        }
        return false;
        };

        this.filter = function (arr, callback, thisArg) {
        var results = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                results.push(arr[i]);
            }
        }
        return results;
        };

};


var data = [32, '', null, 'JavaScript', undefined, 0];
var m  = new AddedMetods();

m.each(data, function(data) {console.log(data)});
console.log(m.some(data, function(data) { return data >= 0;}));




