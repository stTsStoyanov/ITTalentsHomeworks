function task8(number, i=number-1, j=1){
    let str="";
    if(j==number+1){
        return;
    }
    if(typeof number ==="number" &&
        i == 0){
            console.log(0);
    }else{
        //let n=i;
        for(let c=0; c<number; c++){
            str+=i;
        }
        console.log(Number(str));
    }
    return task8(number, i+=2, ++j);
}
task8(4);