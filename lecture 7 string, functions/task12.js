let numb=5;
function creatingArray(n){
    let arr=[];
    for(let i=0; i<n; i++){
        arr[i] = i+1;
    }
    return arr;
}
console.log(creatingArray(numb));
