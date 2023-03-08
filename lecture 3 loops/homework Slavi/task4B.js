let number=8;
let copyOfNumber=number;
let result="";
for(let row=0; row<number; row++){
    for(let rowCounter=copyOfNumber; rowCounter>0; rowCounter--){
        result+="# ";
    }
    copyOfNumber--;
    result+="\n";
}
console.log(result);