
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

//(birthYear >= 1994) && alert("  ");


/*
var READY = "yes";
var NOT_READY = "no";
var READY_SHORT = "y";
var NOT_READY_SHORT = "n";
*/
//var userStatus = prompt("Ready (y/n) ?");
/*
switch(userStatus) {
    case READY:
    case READY_SHORT:
        alert("He is ready");
        break;
    case NOT_READY:
    case NOT_READY_SHORT:
        alert(("He is not ready"));
        break;
    default:
        alert(("Default"));
}
*/
/*
var popupContent =  userStatus === READY || userStatus === READY_SHORT  ?
    "He is Ready" :
    userStatus === NOT_READY || userStatus === NOT_READY_SHORT ?
        "He is not Ready":
        "No signal";
    alert(popupContent);
*/