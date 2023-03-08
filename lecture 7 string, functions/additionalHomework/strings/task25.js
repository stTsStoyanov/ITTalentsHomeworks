let str="I love JavaScript programming";
let target="a";
let replacer="u";
let result="";
let targetPossition=0;
for(let i=0; i<str.length; i++){
    result += str.charAt(i).replace(target, replacer);
}


console.log(`Input string: ${str}\nInput character to replace: ${target}\nInput character to replace with: ${replacer}\nOutput after replace: ${result}`);