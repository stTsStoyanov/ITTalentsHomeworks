function task15(number, i=1, sum=0){
    if(i > number){
        return sum;
    }
    sum+=i;
    return task15(number, ++i, sum);
}
console.log(task15(5))