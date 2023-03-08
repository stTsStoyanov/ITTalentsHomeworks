let inp="asd-12sdf45-56asdf100"
let r=0;
let temp="";
let sum=0;
flag=false;

for(let i=0; i<=inp.length; i++){
    //console.log(`I is =${i}, inp[i]=${inp[i]}`)
    if(inp.charCodeAt(i) >47 && inp.charCodeAt(i) <58 && i<inp.length){
        if(inp.charCodeAt(i-1) == 45){
            temp+="-";
            flag=true;
        }
        temp+=inp[i];
    }else if(inp.charCodeAt(i) <47 || inp.charCodeAt(i) >57  || i==inp.length){
        console.log(temp);
        //if(inp.charCodeAt(i) == 45){
        if(flag){
            sum+= parseInt(temp);
            flag=false;
        }else{
            sum+=Number(temp);
        }
        temp="";
    }
   //console.log(inp[i])
}
console.log(sum)


