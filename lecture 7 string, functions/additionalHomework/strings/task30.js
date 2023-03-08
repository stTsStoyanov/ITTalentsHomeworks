let str="I love to code. I do";
let target="I";
let startIdex;
let endIdex;
let result="";

for(let i=0; i<str.length; i++){
    let counter=0;
    if(str.charAt(i) == target.charAt(counter)){
        for(let j=0; j<target.length; j++){
            if(str.charAt(i+j) == target.charAt(j)){
                counter++;
            }
        }
    }else{
        result+=str.charAt(i)
    }

}

console.log(result);