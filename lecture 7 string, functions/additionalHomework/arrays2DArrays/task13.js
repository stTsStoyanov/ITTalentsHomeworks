let arr=[1,2,3,9,4,5,6,7,8,9];
let secondBiggestNumber=arr[0];
let tempBiggest=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>=tempBiggest){
        tempBiggest=arr[i];
    }
}
for(let i=0; i<arr.length; i++){
    if(arr[i] != tempBiggest && arr[i]>secondBiggestNumber){
        secondBiggestNumber=arr[i];
    } 
}
console.log(secondBiggestNumber)