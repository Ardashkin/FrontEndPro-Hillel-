function pages(a, b) {
    return function (b) {
        return Math.floor(b / a);
    }
}

function sum(a, b, c) {
    return a + b + c;
}


function curry(fnc) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fnc.apply (this, args.concat(Array.prototype.slice.call(arguments)));
        }
}


var curriedPages = curry(pages, 3);
var curriedSum = curry(sum, 5);

var p = curriedPages(3);
var s = curriedSum(5);

console.log(p(23));
console.log(p(21212));

console.log(s(23, 3));
console.log(s(21212,3));
console.log(p(23563, 3));
console.log(p(21212));

