let str="PROBA";
let result="";
for(let i=0; i<str.length; i++){
    let current=str.charCodeAt(i);
    result+=String.fromCharCode(current+32);
    
}
console.log(result);