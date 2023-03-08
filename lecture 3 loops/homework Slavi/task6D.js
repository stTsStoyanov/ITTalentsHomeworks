let number=8;
let result="";
let space=""
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        result+=j+" ";
    }
    result+="\n";
}
console.log(result);