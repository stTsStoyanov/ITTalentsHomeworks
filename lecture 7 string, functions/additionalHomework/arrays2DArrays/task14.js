let arr=[1,2,3,9,4,5,6,7,8,9];
let secondSmallestNumber;
let tempSmallest=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<=tempSmallest){
//         tempSmallest=arr[i];
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > tempSmallest && ){
//         secondBiggestNumber=arr[i];
//     } 
// }
arr.sort()
for(let i=0; i< arr.length; i++){
    if(arr[i] > tempSmallest){
        secondSmallestNumber=arr[i];
        break;
    }
}
console.log(secondSmallestNumber)