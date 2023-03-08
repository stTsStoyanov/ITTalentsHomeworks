let n=5;//n=visochina i shirochina, => n shte bude krajnata tochka na vseki edin for-cikul!
let result="";
for(let visochina=0; visochina<n; visochina++){
    for(let shirochina=0; shirochina<n; shirochina++){
        console.log(n%2)
        if(visochina%2==1 && shirochina==0){
            result+=" "
        }
        result+="#";
    }
    result+="\n";
}
console.log(result);
