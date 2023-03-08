let number=6;
let numberCopy=number;
let result="";
let space="";

for(let row=0; row<number; row++){
    space+="  ";
    result+=space;
    for(let rowElements=numberCopy*2-1; rowElements>0; rowElements--){
        result+="# ";
    }
    numberCopy--;
    if(row<number-1){
        result+="\n";
    }    
}
console.log(result);