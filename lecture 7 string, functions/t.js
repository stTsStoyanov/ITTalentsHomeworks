let inp="asd-12sdf45-56asdf100"
let r=""
let temp="";
let sum=0;
flag=false;
for(let i=0; i<inp.length; i++){
    if((inp.charCodeAt(i) >64 && inp.charCodeAt(i) <123)){
        //console.log(inp[i])
        if(flag){
            sum-=Number(temp)
            console.log(sum)
            temp="";
        }else if(!flag){
            sum+=Number(temp)
            console.log(sum)
            flag=false;
            temp="";
        }
        
    }else{
        if(inp.charCodeAt(i) == 45){
            //temp+=inp[i];
            flag=true;
        }else{
            temp+=inp[i];
            console.log(temp)
        }
    }

}
console.log(sum)

