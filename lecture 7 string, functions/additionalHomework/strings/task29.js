let str="I love to code.";
let target="to";
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
    }
    if(counter == target.length){
        startIdex=i;
        endIdex=i+target.length-1;
    }
}
let secondStringIndexCounter=0;
for(let i=0; i<str.length; i++){
    if(i<startIdex || i>endIdex+1){// +1 na end index za da ne dobavq 1 space poveche!
        result+=str.charAt(i);
    }
}
console.log(result);