;
function UserIteration() {
    for (var i = 0, arr = prompt('Введите любые числа через "," без пробелов',).split(","); i < (arr.length); console.log(Number(arr[i]) + 1), i++) {}
};

function GameUserRandom() {
    var num = Math.floor(Math.random() * (2 - 0)) + 0,
        userNumber = Number(prompt("Guess number"));
    alert("Random  Number = " + num);
    return alert(((userNumber !== null) && (num !== userNumber)) ? "You not guessed" : "You guessed");
};

function UserContinue() {
    do GameUserRandom()
    while (confirm("Continue ?") !== false);
};

function CheckArray ()
{
    var userAnswer = prompt('Введите любые числа через "," без пробелов',),
        arrUser = userAnswer.split(","),
        arrNumber = [],
        arrNAN = [];

    for (let i = 0; i < arrUser.length; i++) {
        isNaN(Number(arrUser[i])) ?  arrNAN.push(arrUser[i]): arrNumber.push( Number(arrUser[i]));
    };
    console.log("Number "+arrNumber + "\n" +
                "NAN " +arrNAN);
};




