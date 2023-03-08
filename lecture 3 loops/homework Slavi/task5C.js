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


number=6;
space="";
let result2="";
numberCopy=number;

for(let row=0; row<number; row++){
    space+="  ";
    result2+=space;
    for(let rowElements=numberCopy*2-1; rowElements>0; rowElements--){
        result2+="# ";
    }
    numberCopy--;
    result2+="\n";  
}

console.log(result);
console.log(result2)