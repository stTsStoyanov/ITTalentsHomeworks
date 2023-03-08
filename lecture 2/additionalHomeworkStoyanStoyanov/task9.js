let sideA=3;
let sideB=5;
let sideC=4;

if(sideA+sideB>sideC && sideA+sideC>sideB && sideB+sideC>sideA){
    console.log(`Yes we can have a triangle with side A=${sideA}, side B=${sideB} and side C=${sideC}`);
}
else{
    console.log(`I am so sorry but cannot have a triangle with side A=${sideA}, side B=${sideB} and side C=${sideC}`)
}