let str="Programming in Java";
let result=[];
let finalResult="";
for(let i=0; i<str.length; i++){
    result[i] = str[i];
}
for(let i=0; i<result.length; i++){
    for(let j=0; j<result.length; j++){
        if(i!=j){
            if(result[i] == result[j]){
                result[j]=undefined;
            }
        }
    }
}
result.forEach(element => {
    if(element!=undefined){
        finalResult+=element;
    }
});
console.log(finalResult);