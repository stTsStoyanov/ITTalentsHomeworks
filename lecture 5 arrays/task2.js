let originalArray=[5,2,5,8,3];
let copyArray=originalArray.slice();
for(let i=originalArray.length-1; i>=0; i--){
    copyArray.push(originalArray[i]);
}
console.log(copyArray);