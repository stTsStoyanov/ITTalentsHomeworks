let str="I love programming";
let target="I";
let result="";
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == target){
        if(str.charAt(i+1) == " "){
            i++;
        }
    }else{
        result+=str.charAt(i);
    }
}
console.log(result);