let str="I love programming. I love JavaScript";
let target="o";
let matches=[];
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        matches.push(i);
    }
}
console.log(`Input string: ${str}\nInput character to search: ${target}\nOutput '${target}' found at index: ${matches}`);