/*
var ai=0;

do {
    console.log("At last once!");
    ai++;
} while (ai<=1);
*/
/*
var userIsHappy = true,
    number = 0;

do {
    alert("Number is = " + ++number);
    userIsHappy = confirm("Continue ?");
} while (userIsHappy);
*/
/*
var number = 0;

do {
    alert("Number is = " + ++number);
} while (confirm("Continue ?"));
*/
/*
var number = 0;
var userIsHappy = true;
while (userIsHappy) {
    alert("Number is = " +number);
    number++;
    userIsHappy = confirm("Continue ?");
}
*/
/*
var numberRandom = Math.floor(Math.random() * (2 - 0)) + 0;

do  {
    numberRandom;
    var userAnswer = prompt("Введите число от 0 до 1");;
    alert('Рандомное число равно -> ' + numberRandom);
    if (numberRandom === Number(userAnswer)) alert("Угадал"); else alert("Не угвдал");
}
while (confirm("Continue ?"));
*/
/*
var num = Math.floor(Math.random() * 10);
var userGuess;

while (
    (userGuess = prompt("Guess number")) !== null &&
        num !== Number(userGuess)
    );
*/

/*
for (var i = 1; i < 10; i++) {
    if (!(i % 2))
    console.log(i);
};
*/

var i=1;
while ( i < 10 ) {
    i += i % 2;
    console.log(i);
    i++;
};

