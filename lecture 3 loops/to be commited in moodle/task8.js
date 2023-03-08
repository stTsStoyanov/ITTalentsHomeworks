const prompt = require("prompt-sync")({sigint: true});
const number = prompt("Enter number: ");
let step=1;
let result=0;

let counter=0;
while(counter<=number){
    if(number == "1"){
        console.log(0);
        break;
    }
    if(counter == number){
        let startNumber=number-1;
        for(let counterOfResult=0; counterOfResult<number; counterOfResult++){
            console.log(startNumber*step);
            startNumber+=2
        }
    }
    if(counter>0){
        step = (step*10)+1
    }
    counter++;
}