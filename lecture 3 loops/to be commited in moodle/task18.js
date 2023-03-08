let numberOne=Math.floor(Math.random()*9)+1;
let numberTwo=Math.floor(Math.random()*9)+1;

for(let counter=1; counter<=numberOne; counter++){
    let number=1;
    while(number<=numberTwo){
        console.log(`${counter} * ${number} = ${counter*number}`);
        number++
    }
}