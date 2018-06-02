
function counter(defaultValue) {
    var value = defaultValue || 0;
    return {
        inc(){
            return value++;
        },
        dec(){
            return value--;
        },
        getValue(){
            return value;
        }
    }
}

var it = counter(3);
//var num = it();
//console.log(num);
it.inc();
it.dec();
it.dec();
it.dec();
it.dec();
it.dec();
it.dec();
console.log(it.getValue());

