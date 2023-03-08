function task4(number){
    if(number < 1){
        return;
    }
    console.log(number);
    task4(--number);
}
task4(10);