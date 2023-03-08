let str1="Hello";
let str2="";
for(let i=0; i<str1.length; i++){
    str2+=String.fromCharCode(str1.charCodeAt(i)+5);
}
console.log(str2);