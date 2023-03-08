function task3(number){
    if(number > 10){
        return;
    }
    if(Math.abs(number) %2 ==1){
        console.log(number)
    }
    task3(++number);
}
task3(-10)