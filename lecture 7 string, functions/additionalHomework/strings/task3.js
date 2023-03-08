let str1="ala";
let str2="ala";
let flag=true;
for(let i=0; i<str1.length; i++){
    if(str1.length != str2.length){
        flag=false;
        break;
    }else if(str1[i] != str2[i]){
        flag=false;
        break;
    }
}
flag ? console.log("The strings are equal.") : console.log("The strings are different!");