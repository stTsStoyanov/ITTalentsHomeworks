let array=[-23, -55, 17, 75, 56, 105, 134];
let resultArray=[];
let matches=0;
for(let counter=0; counter<array.length; counter++){
    if(array[counter]>5){
        if(array[counter] %5 ==0){
            resultArray.push(array[counter]);
            matches++;
        }
    }
}
console.log(`${resultArray} -> ${matches} numbers`);