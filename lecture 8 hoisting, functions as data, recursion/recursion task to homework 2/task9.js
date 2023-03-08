function task9(numbA, numbB, current=0){
    if(current >= numbB){
        return;
    }
    current = numbA*numbA;
    if(numbA % 3 === 0){
        console.log(`skip ${numbA}`);
    }else{
        console.log(current);
    }
    return task9(++numbA, numbB, current);
}
task9(1,100);