let result="* |";

for(let row=0; row<10; row++){
    for(let rowElements=0; rowElements<10; rowElements++){
        if(row==0){
            if(rowElements==9){
                result+="\n-------------------------------------------";
            }else{
                result+=` ${rowElements+1}`;
            }
        }else{
            if(rowElements==0){
                result+=`\n${row} | `;
            }else{
                result+=`${row*rowElements} `
            }
        }
    }
}
console.log(result);