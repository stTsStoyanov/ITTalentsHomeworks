let original=[[1,2,3],[4,5,6]];
//let original=[1,2,3];
let copy=[];

function deepCopy(arr, i=0){
    if(Array.isArray(arr)){
        if(i === arr.length){
            return;
        }
        let nested=[];
        for(let j=0; j<arr[i].length; j++){
            nested[j] = arr[i][j];
        }
        copy.push(nested);
        return deepCopy(arr, ++i);
    }else{
        return console.log("Wrong input");
    }
}
deepCopy(original);
console.log(original.length);
//copy[0][0]=0;
console.log(copy);