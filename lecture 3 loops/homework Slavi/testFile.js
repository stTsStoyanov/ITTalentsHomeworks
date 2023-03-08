let number=8;
let numberCopy=1;
let result="";
let space=""
let copyOfNumber=1;
let numberOfSpaces=number;
let r=""

for(let i=0; i<number; i++){
    for(let j=0; j<numberCopy; j++){
        result+=j+1+" ";
    }
    numberCopy++;
    result+="\n";
}
numberCopy=1;
for(let i=0; i<number; i++){
    for(let spaceCounter=numberOfSpaces; spaceCounter>0; spaceCounter--){
        space+="  ";
    }
    r+=space;
    for(let j=0; j<numberCopy; j++){
        r+=j+1+" ";
    }
    space="";
    numberCopy++;
    r+="\n";
}
console.log(result);
console.log(r)
