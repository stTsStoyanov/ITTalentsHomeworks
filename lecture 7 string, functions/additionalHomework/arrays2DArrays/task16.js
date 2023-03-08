let arr1=[1,2,3,4,5];
let arr2=[5,4,3,2,1];
let areElementsEqual=true;

Array.isArray(arr1) && Array.isArray(arr2) ? console.log(`Array1 is euqal to Array2 by array type criteria`) 
                                           : console.log(`Array1 is not equal to Array 2 by array type criteria`); 
if(arr1.length == arr2.length){
    console.log(`Array1 is equal to Array2 by length criteria`);
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            areElementsEqual=false;
        }
    }
}else{
    console.log(`Array1 is not equal to Array 2 by length criteria`);
}
if(areElementsEqual){
    console.log(`Array1 is equal to Array2 by it's elements`);
}else{
    console.log(`Array1 is not equal to Array2 by it's elements`);
}
