let str="     Lots of leading space."
let result="";
let i=0;
while(str.charAt(i) == " "){
    indexOfString=i;
    i++
}
for(let j=i; j<str.length; j++){
    result+=str.charAt(j);
}
console.log(`Input string: ${str}\nOutput: ${result}`);