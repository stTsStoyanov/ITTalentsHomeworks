let text="";
let counterRow=0;
while(counterRow<10){
    let currentNumber=counterRow+1;
    for(let i=1; i<10; i++){
        if(currentNumber<=9){
            text+=currentNumber;  
        }
        else if(currentNumber == 10 && counterRow<9){
            text+="01"
            currentNumber=1;
        }
        else if(currentNumber==10 && counterRow==9){
            for(let ii=0; ii<10; ii++){text+=ii}
        }
        currentNumber++;
    }
    if(counterRow==0){
        console.log(text+"0")
    }
    else{
        console.log(text)
    }
    counterRow++;
    text="";
}