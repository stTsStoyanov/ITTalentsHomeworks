let number=2548;
let numberToString = number.toString();
for(let element=0; element<numberToString.length; element++){
    if(element ==  0){
        console.log(numberToString[element]);
    }
    else if(element == 1){
        console.log(numberToString[element]);
    }
    else if(element == 2){
        console.log(numberToString[element]);
    }
    else{
        console.log(numberToString[element]);
    }
}

//reshenie 2

let numberToBeSeparated=2548;
console.log(Math.floor(numberToBeSeparated/1000))
numberToBeSeparated-=(Math.floor(numberToBeSeparated/1000)*1000)
console.log(Math.floor(numberToBeSeparated/100))
numberToBeSeparated-=(Math.floor(numberToBeSeparated/100)*100)
console.log(Math.floor(numberToBeSeparated/10))
console.log(numberToBeSeparated-=(Math.floor(numberToBeSeparated/10)*10))