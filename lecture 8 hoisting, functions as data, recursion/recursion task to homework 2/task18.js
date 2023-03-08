function task18(number, multiple, i=1){
    if(i>number){
        return;
    }
    if(typeof number == "number" && typeof multiple == "number" &&
        number>0 && number<10 && multiple>0 && multiple<10){
        
        for(let j=1; j<=multiple; j++){
            console.log(`${i}*${j} = ${i*j}`);
        }
    }
    return task18(number, multiple, ++i);
}
task18(2,2);