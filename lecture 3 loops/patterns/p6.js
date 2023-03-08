let str="";
for(let i=0; i<5; i++){
    if(i%2==1){
        str+="01010";
    }
    else{
        str+="10101";
    }
    console.log(str);
    str="";
}