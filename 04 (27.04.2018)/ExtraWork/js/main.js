var numberArray = [1, 20, 3, -7, 12, 15, -35];
var max, min;

numberArray.sort(function (a, b)
    {return a - b;}
                );
console.log(" Max = " +numberArray[numberArray.length-1] + " PreMax = " +numberArray[numberArray.length-2]);

max = min = 0;
for (let i = 0; i < numberArray.length; ++i) {
    if (numberArray[i] > max) max = numberArray[i];
    if (numberArray[i] < min) min = numberArray[i];
}
console.log("Max = " +max + " Min = " +min);