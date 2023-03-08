let str1="asd fg hjkl";
let wordsCounter=0;
let longestWord=0;
let current=0;

for(let i=0; i<str1.length; i++){
    if(str1[i] != " "){
    current++;
    }if(str1[i] == " " || i==str1.length -1){
        wordsCounter++;
        if(current>longestWord){
            longestWord=current;
        }
        current=0;
    }    
}

console.log(`${wordsCounter} dumi, naj-dulgata e s ${longestWord} simvola`);