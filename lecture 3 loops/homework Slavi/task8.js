//+===+===+
//|   |   |
//|   |   |
//|   |   |
//+===+===+
//|   |   |
//|   |   |
//|   |   |
//+===+===+
let number=9;
let result="";
for(let i=0; i<number; i++){
    if(i==0 || i==4 || i ==8){
        result+="+===+===+"+"\n";
    }else{
        result+="|   |   |"+"\n";
    }
}
console.log(result);
