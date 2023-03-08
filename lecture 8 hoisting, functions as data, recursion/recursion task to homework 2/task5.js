function task5(startNumber, endNumber){
    if(startNumber > endNumber){
        return;
    }
    console.log(startNumber);
    task5(++startNumber, endNumber);
}
task5(12,15);