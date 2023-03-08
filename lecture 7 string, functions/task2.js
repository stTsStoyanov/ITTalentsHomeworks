let str1="pineapple";
let str2="pomegranate";
if(str1.length>=7 <21 && str2.length>=7 < 21){
    let str1FirstFive=str1.slice(0,5);
    let str2FirstFive=str2.slice(0,5);
    str1=str2FirstFive + str1.slice(5);
    str2=str1FirstFive + str2.slice(5);
    str1.length > str2.length ? console.log(`${str1.length}, ${str1}, ${str2}`) 
                              : console.log(`${str2.length}, ${str1}, ${str2}`);
}
