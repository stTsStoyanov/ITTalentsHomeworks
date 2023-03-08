let number=Math.round(Math.random()*89)+10;
let result=""
while(number>1){
    if(number%2==0){
        number=number*0.5;
        result+=number+" ";
    }
    else if(number%2!=0){
        number=number*3+1;
        result+=number+ " ";
    }
}
console.log(result);