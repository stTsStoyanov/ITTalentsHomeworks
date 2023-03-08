let str="I love programming";
let target="g";
let countIndex;
let result=[];
let finalResult="";
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        countIndex=i;
    }
    result.push(str.charAt(i));
}
result[countIndex]=undefined;
result.forEach(element => {
    if(element!=undefined){
        finalResult+=element;
    }
});
console.log(finalResult);