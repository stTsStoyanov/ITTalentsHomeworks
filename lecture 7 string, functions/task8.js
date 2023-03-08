let str1="kapak";
let flag=true;
if(str1.length %2 ==0){ //cheten broj simvoli
    let end = str1.length-1;
    for(let i=0; i<str1.length; i++){
        if(str1[i] != str1[end]){
            flag=false;
        }
        end--;
    }
}else{//necheten broj simvoli
    let end=str1.length-1;
    for(let i=0; i<str1.length; i++){
        if(end-i>1){
            if(str1[i] != str1[end]){
                flag=false;
            }
            end--;
        }
    }    
}
console.log("input " + str1);
flag ? console.log("output yes") : console.log("output no");