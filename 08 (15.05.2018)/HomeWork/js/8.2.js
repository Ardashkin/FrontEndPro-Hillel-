
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
    }


    this.add = function(key, value) {
        var array = [];
        for (var i in this) {
            if (this.setProperty(key)) {
                array.push(this[value]);
            }
        }
        return array;
    }

}


var Person1 = new Person('Alex', 'Ardashkin');

//Person1.car = "BMW";
Person1.add("car");
console.log(Person1);
