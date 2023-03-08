let str="pRObA";
let result="";
for(let i=0; i<str.length; i++){
    let current = str.charCodeAt(i);
    if(str[i] >="A" && str[i] <="Z"){
        result+=String.fromCharCode(current + 32);
    }else if(str[i] >="a" && str[i] <="z"){
        result+=String.fromCharCode(current-32);
    }
}
console.log(result);