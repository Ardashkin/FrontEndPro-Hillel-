'use strict'
function Person(namePerson, surnamePerson){
    this.namePerson = namePerson;
    this.surnamePerson = surnamePerson;

    this.add = function(key, value) {
        return this[key] = value;
    };

    this.delete = function(key) {
        if (this[key]) delete this[key];
    };

    this.has = function(key) {
        if (this[key]) return true;
        else return false;
    };

    this.get = function(key) {
        if (this[key]) return this[key];
    };

    this.toArray = function() {
        var array = [];
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                array.push(this[i]);
            }
        }
        return array;
    };
}

var Person1 = new Person('Alex', 'Ardashkin');

Person1.add('car', 'BMW');
Person1.add('car2', 'BMW');
Person1.delete('car2');
console.log(Person1);
console.log(Person1.has('car111'));
console.log(Person1.get('car'));
