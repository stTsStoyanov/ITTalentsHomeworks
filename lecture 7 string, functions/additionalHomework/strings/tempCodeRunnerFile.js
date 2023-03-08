let str="I love programming";
let target="love";
let targetPossition;
let counter=0;

for(let i=0; i<str.length; i++){
    if(str.charAt(i) != " "){
        for(let j=0; j<target.length; j++){
            if(str[i+j] == target[j]){
                counter++;
            }
        }
    }
    if(counter == target.length){
        targetPossition=i;
        i=str.length-1;
    }
}
console.log(`Input string: ${str}\nInput word: ${target}\nOutput: ${target} is presented at index ${targetPossition}`);