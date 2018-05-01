
function myFunction31() {


var birthYear = Number(prompt("Enter your birth years"));

 isNaN(birthYear) ?  alert("You enter not a year") : AgeUser();

   function AgeUser () {
       if (birthYear <= 2000) {
           alert("Welcome");
       }
       else if (birthYear >= 2006) {
           alert("Go to MultiService");
       } else {
           alert("You no 18 years");
       };
   }
};

function myFunction32(){

 var agree = document.getElementById("agree");
 var notRobot = document.getElementById("not-a-robot");
 var age = document.getElementById("age").value;

 var nationality = document.getElementsByName("nationality");
 function getRadioValue() {
     for(var i=0; i < nationality.length; i++)
        {
            if(nationality[i].checked==true)  return nationality[i].value;
        }
    };

 function Age() {
        if (age>=30) return true;
    };

 function Nationality() {
        switch (getRadioValue()){
            case "Ukraian": return true;
            break;
            case "Russian": alert("Fuck off Russian Gay"); return false;
                break;
            default: alert("Хачам тут совсем не место");
        }
    };

 if ((agree.checked && notRobot.checked)) {
     var res = (Age() && Nationality()) ? "Welcome to WORK" : "your candidacy does not suit us"
     alert(res);
 } else {
     alert("You don't agree with rules or a Robot");
 }
};

function myFunction33() {
    const SALE_USD = 26.05;
    const SALE_EUR = 31.57;
    const SALE_UAH = 1;
    const BUY_USD = 26.20;
    const BUY_EUR = 32.16;
    const BUY_UAH = 32.16;
    var result;
    var operation = document.getElementsByName("operation");
    var currency = document.getElementsByName("currency");
    var currencyOut = document.getElementsByName("currencyOut");
    var summ = document.getElementById("summ").value;

    function getRadioValue(nameRadio) {
        for (var i = 0; i < nameRadio.length; i++) {
            if (nameRadio[i].checked == true) return nameRadio[i].value;
        }
    };


    if (getRadioValue(operation) === "sale") {

        switch (getRadioValue(currency)) {
            case "UAH": {
                switch (getRadioValue(currencyOut)) {
                    case "UAH":
                        result = summ * SALE_UAH;
                        break;
                    case "USD":
                        result = summ / BUY_USD;
                        break;
                    case "EUR":
                        result = summ / BUY_EUR;
                        break;
                }
            }

            case "USD": {
                switch (getRadioValue(currencyOut)) {
                    case "UAH":
                        document.getElementById('result').innerHTML = String(summ * SALE_USD);
                        break;
                    case "USD":
                        document.getElementById('result').innerHTML = String(summ / SALE_UAH);
                        break;
                    case "EUR":
                        document.getElementById('result').innerHTML = String(summ / BUY_EUR);
                        break;
                }
            }

            case "EUR": {
                switch (getRadioValue(currencyOut)) {
                    case "UAH":
                        document.getElementById('result').innerHTML = String(summ * SALE_EUR);
                        break;
                    case "USD":
                        document.getElementById('result').innerHTML = String(summ / SALE_USD);
                        break;
                    case "EUR":
                        document.getElementById('result').innerHTML = String(summ * SALE_UAH);
                        break;
                }
            }
        }

        }else{}
        ;
    document.getElementById('result').innerHTML = result;
    };