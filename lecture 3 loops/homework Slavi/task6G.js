let number=8;
let copyOfNumber=number;
let result="";
let space=""
for(let i=1; i<=number; i++){
    for(let j=copyOfNumber; j>0; j--){
        result+=j+" ";
    }
    result+="\n";
    copyOfNumber--;
}
console.log(result);