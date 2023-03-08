let l=5;
//l-6 => 0-5, 1-4, 2-3  [1,2,3,4,5,6]
//l-5 => 0-4, 1-3  [1,2,3,4,5]
//l-4 => 0-3, 1-2  [1,2,3,4]
//l-7 => 0-6, 1-5, 2-4, [1,2,3,4,5,6,7]


let arr=[1,2,55,55,2,1]; //l=6, =>5 el, => 
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
    else if(arr.length%2 ==1){
        if(i != Math.floor(arr.length/2)){
            if(arr[i] != arr[arrayLength]){
                isTheArrayMirror=false;
            }
        }
    }
    arrayLength--;
}
console.log(isTheArrayMirror)


let s=[1,2,3];
let res=[];
let ttt=[1,1,1]
if(res.length < s.length){
    res = s.slice()
}
console.log(res)
res=ttt.slice()
console.log(res)
ttt.length=0;
console.log(ttt)


// let n=99;
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))
// console.log(n-=Math.round(n/2))

console.log("TASK 15!!!!!!");

let array=[7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
let result=[];
let f1=false;
let f2=false;
console.log(Math.max(...array))
for(let i=0; i<array.length; i++){
    let n=0;
    for(let j=1; l<array.length-1; j++){
        if(Math.abs(array[i]) > Math.abs(array[j])){
            n=array[i];
        }else{
            n=array[j];
        }
    }
    result.push(n);

}


// let isTemp=false;
// let isTemp2=false;

// for(let i=0; i<array.length; i++){
//     let temp=Math.abs(array[i]);
//     let temp2=0;
//     for(let j=1; j<array.length; j++){
//         if(temp > Math.abs(array[j])){
//             isTemp=true;
//             isTemp2=false;
//         }else{
//             temp2=Math.abs(array[j])
//             isTemp=false;
//             isTemp2=true;
//         }
//     }
//     if(isTemp){
//         result.push(temp)
//     }
//     if(isTemp2){
//         result.push(temp2)
//     }
// }


// result[0]=0;
// result[1]=0;
// result[2]=0;
// //result.length=3;
// for(let i=0; i< array.length; i++){
//     if(Math.abs(array[i]) > result[0]){
//         result[0] = array[i];
//     }
// }
// for(let i=0; i< array.length; i++){
//     if(Math.abs(array[i]) > Math.abs(result[1]) && Math.abs(array[i]) < Math.abs(result[0])){
//         result[1] = array[i];
//     }
// }
// for(let i=0; i< array.length; i++){
//     if(Math.abs(array[i]) > Math.abs(result[2]) && Math.abs(array[i]) < Math.abs(result[1])){
//         result[0] = array[i];
//     }
// }

console.log(result);