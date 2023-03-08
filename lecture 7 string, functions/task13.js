let arr1=[1,2,5,3,9,19,22];
let arr2=[0,12,16,3,8,5];

function gluedArrays(a,b){
    let result=[]
    for(let i=0; i<a.length; i++){
        result[i] = a[i];
    }
    for(let i=0; i<b.length; i++){
        result.push(b[i]);
    }
    return result;
}

let test = gluedArrays(arr1, arr2);
console.log(test);