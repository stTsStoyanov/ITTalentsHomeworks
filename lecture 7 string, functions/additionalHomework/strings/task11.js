let str="I love programming and learing JavaScript";
let reversedStr=""
let splitedString=str.split(" ")
for(let i=splitedString.length-1; i>=0; i--){
    reversedStr+=splitedString[i]+" ";
}
console.log(reversedStr);