function task17(side,simbol, i=0, result=""){
    if(i === side){
        return result;
    }
    if(typeof side === "number" &&
        side>2 && side<21){
            if(i == 0 || i == side-1){
                for(let j=0; j<side; j++){
                    result+="*";
                }
            }else{
                for(let j=0; j<side; j++){
                    if(j == 0 || j == side-1){
                        result+="*";
                    }else{
                        result+=simbol;
                    }
                }
            }
            result+="\n";
    }
    
    
    return task17(side, simbol, ++i, result);
}
console.log(task17(10,"+"));