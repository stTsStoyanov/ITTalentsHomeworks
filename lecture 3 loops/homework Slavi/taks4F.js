let number=7;
let result="";
let space="";

for(let row=0; row<number; row++){
    for(let rowCounter=0; rowCounter<number; rowCounter++){
        if(row==0 || row==number-1){
            result+="# "
        }else{
            result+=space+"#";
            break;
        }
    }
    space+="  ";
    result+="\n";
}
console.log(result);