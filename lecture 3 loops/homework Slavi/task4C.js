let number=8;
let copyOfNumber=number;
let result="";
let space="";
for(let row=0; row<number; row++){
    if(row>0){
        space+="  ";
    }
    result+=space;
    for(let rowCounter=copyOfNumber; rowCounter>0; rowCounter--){

        result+=" #";
    }
    copyOfNumber--;
    result+="\n";
}
console.log(result);