function task6(number, startNumber, result){
    if(startNumber > number){
        return result;
    }
    
    result+=startNumber;
    return task6(number, ++startNumber, result);
}
console.log(task6(7,1,0));