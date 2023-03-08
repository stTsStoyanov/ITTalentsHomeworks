let arr=[1,8,5,0,4];
let target=5;
let result=[];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i] + arr[j] == target){
            result.push(`Pair which is equal to ${target} is ${arr[i]} and ${arr[j]}`);
        }
    }
}
console.log(result);