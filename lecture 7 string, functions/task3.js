let str1="хипопотам";
let str2="хипопотук";

str1.length == str2.length ? console.log("Двата низа са с еднаква дължина.") 
                           : console.log("Двата низа не са с еднаква дължина.");
for(let i=0; i<str1.length; i++){
    if(str1[i] != str2[i]){
        console.log(`${i+1} ${str1[i]}-${str2[i]}`);
    }
}