let str="I love programmingrg";
let target="g";
let countIndex=[];
let result=[];
let finalResult="";
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        countIndex.push(i);
    }
    result.push(str.charAt(i));
}
for(let i=0; i<countIndex.length;i++){
    result[countIndex[i]] = undefined;
}
result.forEach(element => {
    if(element!=undefined){
        finalResult+=element;
    }
});
console.log(finalResult);