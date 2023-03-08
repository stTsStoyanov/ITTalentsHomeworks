let firstArray=[13,2,7];
let secondArray=[13,2];
let areTheElementsEqual=true;
let areTheLengthsEqual=true;
for(let i=0; i< firstArray.length; i++){
    if(firstArray[i] != secondArray[i]){
        areTheElementsEqual=false;
    }
    if(firstArray.length != secondArray.length){
        areTheLengthsEqual=false;
    }
}
if(areTheElementsEqual){
    console.log("Arrays are EQUAL");
}else{
    console.log("Arrays are DIFFERENT");
}

if(areTheLengthsEqual){
    console.log("Arrays lenght is EQUAL");
}else{
    console.log("Arrays lenght is DIFFERENT");
}