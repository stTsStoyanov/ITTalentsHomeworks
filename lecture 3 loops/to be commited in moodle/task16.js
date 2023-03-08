let n=25;
let m=249;

if((n>=10 && n<=5555) && (m>10 && m<=5555)){
    let counter=0;
    let toNumber=0;
    if(n>m){counter=n; toNumber=m}
    else{counter=m; toNumber=n;}
    for(counter; counter>=toNumber; counter--){
        if(counter%50 ==0){
            console.log(counter)
        }
    }
}