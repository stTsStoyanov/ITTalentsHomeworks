let arrayOne=[18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
let arrayTwo=[1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
let result=[];
for(let counter=0; counter<arrayOne.length; counter++){
    if(arrayOne[counter] > arrayTwo[counter]){
        result.push(arrayOne[counter]);
    }else{
        result.push(arrayTwo[counter]);
    }
}
console.log(result);