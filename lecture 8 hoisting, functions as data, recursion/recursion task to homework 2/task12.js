function task12(number){
    let str = number.toString()
    if(number>999){
        return;
    }
    if(str.charAt(0) != str.charAt(1) &&
        str.charAt(1) != str.charAt(2) &&
        str.charAt(0) != str.charAt(2)){
            console.log(str)
        }   
    return task12(++number); 
}
task12(100);