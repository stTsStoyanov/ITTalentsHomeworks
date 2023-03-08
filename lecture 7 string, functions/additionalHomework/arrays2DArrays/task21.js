let numberOfElements=10;
let bigArray=[];
let evenArray=[];
let oddArray=[];
for(let i=0; i<numberOfElements; i++){
    bigArray[i]=i;
    if(i%2 == 0){
        evenArray.push(i);
    }else{
        oddArray.push(i);
    }
}
console.log(`Input size of the array: ${numberOfElements}\n
             Input elements in array: ${bigArray}\n
             Output even elements in array: ${evenArray}\n
             Output odd elements in array: ${oddArray}`);