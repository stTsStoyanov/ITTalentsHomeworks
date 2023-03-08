let n=5;//n=visochina i shirochina, => n shte bude krajnata tochka na vseki edin for-cikul!
let result="";
for(let visochina=0; visochina<n; visochina++){
    for(let shirochina=0; shirochina<n; shirochina++){
        result+="#";
    }
    result+="\n";
}
console.log(result);