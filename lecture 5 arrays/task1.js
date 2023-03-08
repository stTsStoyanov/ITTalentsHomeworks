let arr=[10,3,5,8,6,-3,7];
let arrResult=[];
for(let i=0; i<arr.length; i++){
    if(arr[i] %3 ==0){
        arrResult.push(arr[i]);
    }
}
console.log(arrResult);
let result=arrResult[0];
for(let i=1; i<arrResult.length-1; i++){
    if(result >arrResult[i+1]){
        result = arrResult[i+1]
    }
}
console.log(result)