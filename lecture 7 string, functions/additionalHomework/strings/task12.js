let str="I love programming s";
let target="o";
let posstiotin=0;
for(let i=0; i< str.length; i++){
    if(str.charAt(i) == target){
        posstiotin=i;
        break;
    }
}
console.log(`Input string: ${str}\nInput character: ${target}\nOutput: ${posstiotin}`);