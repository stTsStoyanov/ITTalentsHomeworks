let arr=[5,10,2,5,50,5,10,1,2,2];
let result=[]
for(let i=0; i<arr.length; i++){
    let counter=0;
    let indexToBeRemoved=[];
    for(let j=0; j<arr.length; j++){
        if(arr[i] == arr[j]){
            counter++;
        }
    }
    result.push(`Frequency of ${arr[i]} = ${counter}`);
}

for(let i=0; i<result.length; i++){
    let flag=false;
    for(let j=0; j<result.length; j++){
        if(result[i] == result[j] && i!=j){
            flag=true;
            break;
        }
    }
    if(flag){
        result.splice(i,1);
    }
}
console.log(result)