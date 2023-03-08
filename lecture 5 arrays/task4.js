let arr=[1,2,55,55,2,1]; //l=6, =>5 el, => 
//let arr=[6,27,-1,5,8,7,5,-1,27,6]
let arrayLength= arr.length-1;
let isTheArrayMirror=true;
for(let i=0; i<arr.length; i++){
    if(arr.length%2 ==0){ //nqma ostatuk, chetno
        if(i != arr.length/2){
            if(arr[i] != arr[arrayLength]){
                isTheArrayMirror=false;
            }
        }
    }
    else if(arr.length%2 ==1){//ima ostatuk, nechetno
        if(i != Math.floor(arr.length/2)){
            if(arr[i] != arr[arrayLength]){
                isTheArrayMirror=false;
            }
        }
    }
    arrayLength--;
}
console.log(`Is the array mirroy -> ${isTheArrayMirror}`);