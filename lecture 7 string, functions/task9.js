let inp="asd-12sdf45-56asdf100"
let temp="";
let sum=0;
flag=false;

for(let i=0; i<=inp.length; i++){
    if(inp.charCodeAt(i) >47 && inp.charCodeAt(i) <58 && i<inp.length){
        if(inp.charCodeAt(i-1) == 45){
            temp+="-";
            flag=true;
        }
        temp+=inp[i];
    }else if(inp.charCodeAt(i) <47 || inp.charCodeAt(i) >57  || i==inp.length){
        if(flag){
            sum+= parseInt(temp);
            console.log(parseInt(temp))
            flag=false;
        }else if(temp != ""){
            sum+=Number(temp);
            console.log(Number(temp))
        }
        temp="";
    }
}
console.log(`Sum is = ${sum}`)