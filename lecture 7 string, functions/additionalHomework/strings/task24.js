let str="I love programming";
let target="r";
let replacer="f";
let result="";
let targetPossition=0;
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        targetPossition=i;
    }
}
for(let i=0; i<str.length; i++){
    if(i != targetPossition){
        result+=str.charAt(i);
    }else{
        result+=replacer;
    }
}
console.log(`Input string: ${str}\nInput character to replace: ${target}\nInput character to replace with: ${replacer}\nOutput after replace: ${result}`);