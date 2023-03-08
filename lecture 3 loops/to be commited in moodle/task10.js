const prompt = require("prompt-sync")({sigint: true});
const number = prompt("Enter number: ");
//number%2 ==1
if(number/1 == number && number/number == 1 && number%2==1 && number!=1){
    console.log("YES")
}
else if(number==2){
    console.log("YES")
}
else{
    console.log("no...")
}