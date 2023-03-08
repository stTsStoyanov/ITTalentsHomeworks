let originalArray=[7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
let result=[];
for(let counter=0; counter<originalArray.length; counter++){
    if(originalArray[counter]>=-2.99 && originalArray[counter]<=2.99){
        result.push(originalArray[counter]);
    }
}
console.log(result);