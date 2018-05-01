function NumberIteration() {
    console.log("Output even numbers up to 10, using 'For'");
    for (var i = 1; i <= 10; i++) {
        if (!(i % 2)) console.log(i);
    };

    i = 1;
    console.log("Output even numbers up to 10, usinh 'While'");
    while (i < 10) {
        console.log(i += i % 2);
        i++;
    };

    i = 1;
    console.log("Output even numbers up to 10, using 'Do/While'");
    do {
        console.log(i += i % 2);
        i++;
    }
    while (i <=10);
};

function GameUserRandom() {
    var num = Math.floor(Math.random() * (2 - 0)) + 0;

    do {
        var userNumber = Number(prompt("Guess number"));
        alert("Random  Number = " +num);
        alert(((userNumber !== null) && (num !== userNumber)) ? "You not guessed" : "You guessed");
    }
    while (confirm("Continue ?") !== false);

    /*
    while (confirm("Continue ?") !== false) {
        var userNumber = Number(prompt("Guess number"));
        alert("Random  Number = " +num);
        alert( ((userNumber !== null) && (num !== userNumber)) ? "You not guessed" : "You guessed");
    };
    */

};

function Multiple() {
    var userNumber = Number(prompt("Your number"));
    var userMultiple = Number(prompt("Multiple"));

    console.log("Display multiple numbers using 'For'");
    for (let i = 1; i <= userMultiple; i++) {
        console.log(i * userNumber);
    };

    console.log("Display multiple numbers using 'While'");
    i = 1;
    while (i <= userMultiple) {
        console.log(i * userNumber);
        i++;
    };

};