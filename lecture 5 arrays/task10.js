//Da pitam Slavi dali tova vuvejdane na chisla e fine?
let array=[1,2,3,4,5,6,7];
let average=0;
let numberEqualToTheAverage=0;
for(let counter=0; counter<array.length; counter++){
    average+=array[counter];
}
average=Math.floor(average/array.length);
for(let counter=0; counter<array.length; counter++){
    if(array[counter] == average){
        numberEqualToTheAverage=array[counter];
    }
}
console.log(`The average is: ${average} and the closest number is: ${numberEqualToTheAverage}`);