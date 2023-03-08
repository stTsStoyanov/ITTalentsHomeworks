let number = Math.round(Math.random()*998)+1;
let result="";
let counter=1;
while(counter<11){
    ++number;
    if((number)%2==0 || (number)%3==0 || (number)%5==0){
        //console.log(`${counter}:${number}`);
        if(counter<10){
            result+=`${counter}:${number}; `;
        }else{
            result+=`${counter}:${number}`;
        }
        counter++;
    }
}
console.log(result)