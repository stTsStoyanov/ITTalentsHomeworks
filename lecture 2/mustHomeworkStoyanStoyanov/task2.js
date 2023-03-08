let isItRegularNumber=false;
let isItFloat=true;

const numberOne=10;
const numberTwo=5;
const floatOne=4.5;
const floatTwo=2.1;

if(isItRegularNumber){
    let sum = numberOne+numberTwo;
    let difference = numberOne-numberTwo;
    let multiplication = numberOne*numberTwo;
    let reminder = numberOne%numberTwo;
    let division = numberOne/numberTwo;
    console.log(`The result is sum=${sum}, difference=${difference}, multiplication=${multiplication.toFixed(2)}, reminder=${reminder} and the result of division=${division.toFixed(2)}`);
}
else{
    let sum = floatOne+floatTwo;
    let difference = floatOne-floatTwo;
    let multiplication = floatOne*floatTwo;
    let reminder = floatOne%floatTwo;
    let division = floatOne/floatTwo;
    console.log(`The result is sum=${sum}, difference=${difference}, multiplication=${multiplication.toFixed(2)}, reminder=${reminder} and the result of division=${division.toFixed(2)}`);
}