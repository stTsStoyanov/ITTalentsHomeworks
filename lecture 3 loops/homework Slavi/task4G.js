let number=7;
let copyOfNumber=number;
let result="";
let space="";

for(let row=0; row<number; row++){
    for(let reversedRowCounter=copyOfNumber-1; reversedRowCounter>0; reversedRowCounter--){
        space+="  ";
    }
    for(let rowCounter=0; rowCounter<number; rowCounter++){
        if(row==0 || row==number-1){
            result+="# "
        }else{
            result+=space+"#";
            break;
        }
    }
    copyOfNumber--;
    result+="\n";
    space="";
}
console.log(result);