let arr=[2,5,8];
let target=8;
let targetIndex;
for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        arr.splice(i,1);
    }
}
console.log(arr);