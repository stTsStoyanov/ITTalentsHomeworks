let number=8;
let result="";
for(let row=0; row<number; row++){
    for(let rowCounter=0; rowCounter<=row; rowCounter++){
        result+="# ";
    }
    result+="\n";
}
console.log(result);