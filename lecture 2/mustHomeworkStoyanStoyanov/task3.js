let numberOne=5;
let numberTwo=10;
let temporaryVariable;

temporaryVariable=numberTwo
numberTwo = numberOne
numberOne=temporaryVariable

//swapping the values without using third variable 
//[numberOne, numberTwo] = [numberTwo, numberOne];
console.log(numberOne, numberTwo);