let str="I love programming";
let vowels=0;
let consonants=0;

for(let i=0; i<str.length; i++){
    //if(str.charCodeAt(i) == (97||65||101||69||105||73||111||79||117||85||121||89)){
    //if(str.charAt(i) == "a"||"A"||"e"||"E"||"i"||"I"||"o"||"O"||"u"||"U"||"y"||"Y"){
    if(str.charAt(i) == "a"||str.charAt(i) == "A"||str.charAt(i) == "e"||str.charAt(i) == "E"||str.charAt(i) == "i"||str.charAt(i) == "I"||str.charAt(i) == "o"||str.charAt(i) == "O"||str.charAt(i) == "u"||str.charAt(i) == "U"||str.charAt(i) == "y"||str.charAt(i) == "Y"){
        vowels++;
    }else{
        if(str.charCodeAt(i) != (32||33||46||63)){
            consonants++;
        }
    }
}
console.log(`Input text: ${str}\nTotal Vowels = ${vowels}\nTotal Consonats = ${consonants}`);