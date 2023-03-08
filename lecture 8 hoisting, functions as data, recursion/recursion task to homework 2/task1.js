function task1(number){
    if(number > 100){
        return;
    }
    console.log(number);
    task1(++number);
    //return task1(++number);
}
task1(1)