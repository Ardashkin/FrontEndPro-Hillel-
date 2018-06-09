"use strict";

function copy(source, destination) {
    var dest = destination || {};
    for (var i in source){
        if (source.hasOwnProperty(i)){
            dest[i] = source[i] instanceof Object ?
                copy(source[i]) :
                source[i];
        }
    }
    return dest;
}

var obj1 = {
    a : 1,
    b : {
        a : 3
    }
};

var obj2 =  copy(obj1);
obj2.b.a = 5;

console.log(obj1);
console.log(obj2);
