'use strict'
function Person(namePerson, surnamePerson){
    this.namePerson = namePerson;
    this.surnamePerson = surnamePerson;

    this.toArray = function() {
        var array = [];
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                array.push(this[i]);
            }
        }
        return array;
    };

    this.add = function(nameKey, value) {
        return this[nameKey] = value;
    }

    this.delete = function(nameKey) {
        if (this[nameKey]) delete this[nameKey];
    }

    this.has = function(nameKey) {
        if (this[nameKey]) return true;
        else return false;
    }

    this.get = function(nameKey) {
        if (this[nameKey]) return this[nameKey];
    }

}

var Person1 = new Person('Alex', 'Ardashkin');

Person1.add('car', 'BMW');
Person1.add('car2', 'BMW');
Person1.delete('car2');
console.log(Person1);
console.log(Person1.has('car111'));
console.log(Person1.get('car'));
