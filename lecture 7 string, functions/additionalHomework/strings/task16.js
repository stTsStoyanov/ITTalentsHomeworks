let str="I want to be JavaScript programmer";
let result=0;
let max="";
for(let i=0; i<str.length; i++){
    let current=0;
    for(let j=0; j<str.length; j++){
        if(str[i] == str[j] && str[i]!=" " && str[j]!=" "){
            current++;
        }
    }
    if(current>result){
        result=current;
        max=str[i];
    }
}
console.log(`Input any string: ${str}\nOutput maximum occuring character: '${max}'`);