const prompt = require("prompt-sync")({sigint: true})
let numberOne = prompt("Enter number A: ");
const numberTwo = prompt("Enter number B: ");
let result=0;

while(numberOne <= numberTwo){
        if(result>200){break;}
        if(numberOne%3 !=0){
            result+=numberOne**2
            if(numberOne<numberTwo){
                console.log(numberOne**2+",");
            }else{
                console.log(numberOne**2);
            }
        }
        else if(numberOne%3 ==0){
            if(numberOne<numberTwo){
                console.log("skip",numberOne+",");
            }else{
                console.log("skip",numberOne);
            }
        }
        numberOne++;        
}