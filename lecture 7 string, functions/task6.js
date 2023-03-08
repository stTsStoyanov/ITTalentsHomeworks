let str1="super qka zadacha";
let result="";
let i=0;
while(i< str1.length){
    if(i==0){
        result+=str1[i].toUpperCase();
        i++;
    }else if(str1[i]==" "){
        result+=" "+str1[++i].toUpperCase();
        i++;
    }else if(str1[i]!=" "){
        result+=str1[i];
        i++;
    }
}
console.log(result);