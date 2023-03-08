let str="I love JavaScript programming";
let words=0;
if(str[0]!=" "){
    words++;
}
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == " "){
        words++;
    }
}
console.log(`Input string: ${str}\nTotal number of words: ${words}`);