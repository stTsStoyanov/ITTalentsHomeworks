let number=8;
let copyOfNumber=number;
let result="";
let space="";
for(let row=0; row<number; row++){
    for(let spaceCounter=0; spaceCounter<copyOfNumber; spaceCounter++){
        space+="  ";
    }

    result+=space;
    for(let rowCounter=0; rowCounter<row; rowCounter++){
        result+="# ";
    }
    copyOfNumber--;
    result+="\n";
    space="";
}
console.log(result);