const prompt = require("prompt-sync")({sigint: true});
const number = prompt("Enter number: ");
let result=0;
for(let counter=1; counter<=number; counter++){
    result+=3
    if(counter<number){
        console.log(`${result},`)
    }
    else{
        console.log(result)
    }
}
