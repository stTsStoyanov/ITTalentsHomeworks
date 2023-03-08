let str="I love programming. I love coding. I love IT Talents";
let target="o";
let matches=0;;
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        matches++;
    }
}
console.log(`Input string: ${str}\nInput character to search: ${target}\nOutput total occurrents of '${target}': ${matches}`);