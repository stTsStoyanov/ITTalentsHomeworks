let str="I love programming";
let target="o";
let replacer="y";
let result="";
let flag=true;
for(let i=0; i<str.length; i++){
    if(flag){
        if(str.charAt(i) == target){
                result+=replacer;
                flag=false;
        }else {
            result+=str.charAt(i);
        }
    }else{
        result+=str.charAt(i);
    }
}
console.log(`Input string: ${str}\nInput character to replace: ${target}\nInput character to replace with: ${replacer}\nOutput after replace: ${result}`);