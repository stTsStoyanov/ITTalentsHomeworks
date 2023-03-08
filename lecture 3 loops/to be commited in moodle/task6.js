const prompt = require("prompt-sync")({ sigint: true });
const number = prompt("Enter a number ");
let resultOfSumedNumbers=0;
for(let counter=1; counter<=number; counter++){
    resultOfSumedNumbers+=counter;
}
console.log(resultOfSumedNumbers);