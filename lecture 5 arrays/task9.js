let arrayToBeReversed=[2,3,7,-5];
let temp=0;
let lastElement=arrayToBeReversed.length-1;
let end=Math.floor((arrayToBeReversed.length)/2)
for(let counter=0; counter<arrayToBeReversed.length; counter++){
    if(counter != end){
        temp=arrayToBeReversed[counter];
        arrayToBeReversed[counter] = arrayToBeReversed[lastElement];
        arrayToBeReversed[lastElement] = temp;
        lastElement--;
    }else{
        break;
    }
}
console.log(arrayToBeReversed);