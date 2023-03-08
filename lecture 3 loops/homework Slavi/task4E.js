let number=8;
let result="";
let space="";

for(let row=0; row<number; row++){
    result+="#"
    for(let rowCounter=0; rowCounter<number-2; rowCounter++){
        if(row==0 || row==number-1){
            result+=" #";
        }else{
            space+="  ";
        }
    }
    result+=space+" #\n";
    space="";
}
console.log(result);