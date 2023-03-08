//let arr=[7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
let arr=[1,2,7,-6,8,4,5]
var largestNumbers = [];
// for(let i=arr.length-1; i>=0; i--){ //descending order
//     for(let j=arr.length-1; j>=0; j--){
//         if(Math.abs(arr[i]) < Math.abs(arr[j])){ // checking if element i is smaller that element j. If so they change places!!! On first iteration i=0; j=0,1,2,3....
//             let temp=arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
for(let i=0; i<arr.length; i++){//ascending order
    for(let j=0; j<arr.length; j++){
        if(Math.abs(arr[i]) < Math.abs(arr[j])){ // checking if element i is smaller that element j. If so they change places!!! On first iteration i=0; j=0,1,2,3....
            let temp=arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

for(let i=arr.length-3; i<=arr.length-1; i++){//the array is arranged in ascending order, so i have to take the last 3 elements.
    largestNumbers.push(arr[i]);
}
console.log(arr);// output the original ARRAY
console.log(largestNumbers)//output is according to the Krasimir Stoev's answer in Discord.