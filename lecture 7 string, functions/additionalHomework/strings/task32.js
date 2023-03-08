let str="Lots of leading space.     "
let result="";
let possition;
let lastIndex=str.length-1
while(str.charAt(lastIndex) == " "){
    possition=lastIndex;
    lastIndex--;
}
for(let j=0; j<possition; j++){
    result+=str.charAt(j);
}
console.log(`Input string: ${str}\nOutput: ${result}`);