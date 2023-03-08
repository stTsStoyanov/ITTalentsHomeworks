function task19(number,copy=number){
    if(copy==1){
        return;
    }
    let sum=0;
    if(typeof number === "number" && number>9 && number<100){
        if(copy+1 % 2 == 0){ // ako number e chetno
            sum=Math.floor(copy*0.5);
            console.log(sum);
        }else if(copy+1 % 2 == 1){
            sum=Math.floor(copy*3+1);
            console.log(sum);
        }
    }
    return task19(number,copy);
}
task19(11);