function task11(number, star="*", result=""){
    let space="";
    if(number < 1){
        return result;
    }
    for(let i=0; i<number-1; i++){
        space+=" ";
    }
    result+=space+star+"\n";
    return task11(--number,star+="**", result);
}
console.log(task11(22));