function task16(min, max, sum=0){
    if(min > max){
        return sum;
    }
    if(min >10 && min <5555 &&
       max >10 && max <5555){
        if(max % 50 === 0 ){
            console.log(max);
        }
    }
    return task16(min, --max, sum);
}
task16(25,249);