let str="";
for(let i=0;i<5;i++){
    for(ii=0; ii<5; ii++){
        if(i==2 && ii==2){
            str+="0";
        }
        else{
            str+="1";  
        }
    }
    console.log(str);
    str="";
}
