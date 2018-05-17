
function Some(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};


var data = [32, '', null, 'JavaScript', undefined, 0];

var nums = [1, 2, 3, 4, 5];
var result = nums.some(function(num) {
    return num > 3;
});
console.log(result);