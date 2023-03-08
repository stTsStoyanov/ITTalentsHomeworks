let str="123abc.,!";
let words=0;
let numbers=0;
let special=0;
for(let i=0; i<str.length; i++){
    if((str[i] >="a" && str[i] <="z") || (str[i] >= "A" && str[i] <="Z")){
        words++;
    }else if(str.charCodeAt(i) >=48 && str.charCodeAt(i) <=57){
        numbers++;
    }else{
        special++;
    }
}
console.log(`Alphabets = ${words}\nDigits = ${numbers}\nSpecial character = ${special}\nTotal length = ${str.length}`);