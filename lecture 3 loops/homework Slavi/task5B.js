let number=6;
let numberCopy=1;
let numberOfSpaces=number;
let result="";
let space="";

for(let row=0; row<number; row++){
    for(let spaceCounter=0; spaceCounter<numberOfSpaces; spaceCounter++){
        space+="  ";
    }
    result+=space;
    for(let rowElements=0; rowElements<numberCopy; rowElements++){
        result+="# ";
    }
    if(numberCopy<number*2){
        numberCopy+=2;
    }
    if(row<number-1){
        result+="\n";
    }
    space="";
    numberOfSpaces--;
}
console.log(result);