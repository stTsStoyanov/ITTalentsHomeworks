//N1 < N2 > N3 < N4 > N5 <..
let array=[1, 3, 2, 4, 3, 7];
let times=array.length/3;
let counter=0;
let step=0;
let isTheArrayZig=true;
while(counter<times){
    if(array[step]<array[step+1] && array[step+1] > array[step+2]){
    }else{
        isTheArrayZig=false;
        break;
    }
    counter++;
    step+=2;
}
console.log(`Is the array zigzaobraze? -> ${isTheArrayZig}`)