let number=99;
let result=[];

while(number > 0){
    if(number%2 == 0){
        result.unshift(0);
    }
    else if(number%2 == 1){
        result.unshift(1);
    }
    number-=Math.round(number/2);
}
console.log(result)