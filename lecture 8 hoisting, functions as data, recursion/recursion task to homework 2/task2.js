function task2(number){
    if(number > 50){
        return;
    }
    console.log(number);
    task2(++number);
}
task2(-20)