let arr=[1,1,2,4,5,2,5,1,8,9,0];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i] == arr[j] && i!=j){
            arr.splice(j,1);
        }
    }
}
console.log(arr);