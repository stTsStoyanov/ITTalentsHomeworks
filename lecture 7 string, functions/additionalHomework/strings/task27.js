let str="I love programming. I love coding.";
let target="love";
let targetPossition;

for(let i=0; i<str.length; i++){
    let counter=0;
    if(str.charAt(i) == target.charAt(counter)){// && str.charAt(i+1) == target[counter+1]){
        for(let j=0; j<target.length; j++){
            if(str.charAt(i+j) == target.charAt(j)){
                counter++;
            }
        }
    }
    if(counter == target.length){
        targetPossition = i;
    }
}
console.log(`Input string: ${str}\nInput word: ${target}\nOutput last index: ${targetPossition}`);