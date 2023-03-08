// let str1="машина";
// let str2="шапка";
let str1="abc";
let str2="dec";
let flag=-1;

for(let i=0; i<str2.length; i++){
    if(flag==-1){
        for(let j=0; j<str1.length; j++){
            if(str2[i] == str1[j]){
                flag=j;
                break;
            }
        }
    }
}
if(flag!=-1){
    for(let i=0; i<str1.length; i++){
        if(i===flag){
            console.log(str2);
        }else{
            console.log(str1[i]);
        }
    }
}else{
    console.log("Редицата няма общ знак!");
}
