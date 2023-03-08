let str="Hello";
let reversedStr="";
for(let i=str.length-1; i>=0; i--){
    reversedStr+=str.charAt(i);
}
console.log(`Input string: ${str}\nOutput reversed string: ${reversedStr}`);