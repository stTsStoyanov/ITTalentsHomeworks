let inputArray=[2,3,-11,7];
let output=[];
for(let i=0; i<inputArray.length; i++){
    if(inputArray[i-1]==undefined){
        output[i]=0+inputArray[i+1];
    }
    else if(inputArray[i+1]==undefined){
        output[i]=inputArray[i-1]+0;
    }
    else{
        output[i]=inputArray[i-1]+inputArray[i+1];
    }
}
console.log(output);