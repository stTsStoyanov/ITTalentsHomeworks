let arr=[1,5,2,4,4,4,9,1,0,9,5]; //1->2, 5->2, 4->3, 9->2;
let dublicates=[];
let isElementNotIntoArray=Boolean;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i]==arr[j] && i!=j){
            if(dublicates.length == 0){
                dublicates.push(arr[i]);
            }else{
                for(let k=0; k<dublicates.length; k++){
                    if(dublicates[k]!=arr[i]){
                        isElementNotIntoArray=true;
                    }else{
                        isElementNotIntoArray=false;
                        break;
                    }   
                }
                if(isElementNotIntoArray){
                    dublicates.push(arr[i]);
                }
            }  
        }
    }
}

console.log(`Dublicates in array -> ${arr} are:\n${dublicates}`);