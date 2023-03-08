let arr1=[1,5,4,88,15,22,3,2];
let arr2=[105,1,3,5,22,66,12];
let commonElementBetweenTwoArrays=[];
let isElementNotIntoArray=Boolean;

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            if(commonElementBetweenTwoArrays.length == 0){
                commonElementBetweenTwoArrays.push(arr1[i])
            }else{
                for(let k=0; k<commonElementBetweenTwoArrays.length; k++){
                    if(arr1[i] != commonElementBetweenTwoArrays[k]){
                        isElementNotIntoArray=true;
                    }else{
                        isElementNotIntoArray=false;
                        break;
                    }
                }
                if(isElementNotIntoArray){
                    commonElementBetweenTwoArrays.push(arr1[i]);
                }
            }
        }
        
    }
}

console.log(arr1);
console.log(arr2);
console.log(commonElementBetweenTwoArrays);
