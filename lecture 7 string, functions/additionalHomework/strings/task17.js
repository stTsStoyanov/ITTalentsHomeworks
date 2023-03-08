let str="I want to be JavaScript programmer";
let min="";
let arr=[];
for(let i=0; i<str.length; i++){
    let current=0;
    for(let j=0; j<str.length; j++){
        if(str[i] == str[j] && str[i]!=" " && str[j]!=" "){
            current++;
        }
    }
    if(str[i] != " "){
        arr.push(str[i]+current)
   }
}
arr.sort();
min=arr[0];
console.log(`Input any string: ${str}\nOutput maximum occuring character: '${min[0]}'=${min[1]}`);
