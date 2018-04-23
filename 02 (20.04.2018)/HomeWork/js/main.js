;
/*
    //2.1. Среднее арифметическое нескольких введенных чисел

    var userAnswer1 = Number(prompt('Введите первое число',));
    var userAnswer2 = Number(prompt('Введите второе число',));
    alert( (userAnswer1 + userAnswer2)/2 );
*/
/*
    //2.1.1 Запросить введение чисел и найти их среднее арифметическое

    var arrLength = Number(prompt("Введите количество чисел",));
    var arrNumber = new Array(arrLength);
    var summ =0;

        for (var i = 0; i < arrLength; i++) {
            arrNumber[i] = Number(prompt("Введите число " +(i+1),));
            summ += arrNumber[i];
        };
    alert("Среднее арифметическое =" +summ/arrLength);
*/
/*
    //2.1.2 (Усложнить) Запросить введение чисел через запятую. Найти их среднее арифметическое.

    var userAnswer = prompt('Введите любые числа через "," без пробелов',);
    var arrNumber = userAnswer.split(",");
    var summ = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        summ += Number(arrNumber[i]);
    };
    alert("Среднее арифметическое = " +summ/arrNumber.length);
*/
/*
    //2.2 Скрипт запрашивающий значение в одной валюте и выводящий результат в другой
    var userAnswerCurrency = prompt('Введите валюту USD UAH EUR',);

    if (userAnswerCurrency == "USD" || userAnswerCurrency == "UAH" || userAnswerCurrency == "EUR")
    {
        var userAnswerNumber = prompt('Введите сумму',);
        switch (userAnswerCurrency) {
            case 'USD': {
                alert('Получаем ' +
                    '\n USD =' + userAnswerNumber +
                    '\n UAH =' + (userAnswerNumber * 26.0) +
                    '\n EUR =' + (userAnswerNumber * 0.811));
            }
                break;
            case 'UAH': {
                alert('Получаем ' +
                    '\n USD =' + (userAnswerNumber / 26.1) +
                    '\n UAH =' + userAnswerNumber +
                    '\n EUR =' + (userAnswerNumber / 32.1));
            }
                break;
            case 'EUR': {
                alert('Получаем ' +
                    '\n USD =' + (userAnswerNumber * 1.238) +
                    '\n UAH =' + (userAnswerNumber * 31.7) +
                    '\n EUR =' + userAnswerNumber);
            }
                break;
        }
    } else {
        alert("Вы не правильно ввели валюту");
    }
*/
/*
    //2.3 Проверить на соответствие два запрашиваемых значения

    var userAnswer = Number(prompt('Введите число',));

    if (isNaN(userAnswer)) {
        alert("Вы ввели не число");
    } else {
        alert("Вы ввели число");
    };
*/
/*
    // 2.4 (вложил с классной работы, задача про сравнение рандомного числа и числа которое вводит пользователь)
    // сравниваем целые числа
    var userAnswer = prompt("Введите  0 или 1",);
    var numberRandom = Math.floor(Math.random() * (2 - 0)) + 0;

    alert('Рандомное число равно -> ' +numberRandom);
    alert(numberRandom === Number(userAnswer));
*/