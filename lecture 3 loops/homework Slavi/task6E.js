let number=8;
let copyOfNumber=number;
let result="";
let space="";
let numberOfSpaces=0;
    
for(let i=1; i<=number; i++){
    for(let i=0; i<numberOfSpaces; i++){
        space+=" ";
    }
    result+=space;
    for(let j=1; j<=copyOfNumber; j++){
        result+=j;
    }
    result+="\n";
    numberOfSpaces++;
    copyOfNumber--;
    space="";
}
console.log(result);