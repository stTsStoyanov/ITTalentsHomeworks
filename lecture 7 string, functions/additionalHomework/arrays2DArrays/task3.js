let arr=[2,5,8,"*"];
let target="*";
for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        console.log(`Yes array contains specific value, which is ${target}`);
    }
}