let str="Hello";
let arr=[];
console.log(`Input string: ${str}\nOutput frequency of each character:`);
for(let i=0; i<str.length; i++){
    let count=0;
    for(let j=0; j<str.length; j++){
        if(str[i] == str[j] && str[i]!=" " && str[j]!=" "){
            count++;
        }
    }
    if(arr.includes(str[i])){
        arr[str[i]]=count;
        
    }else{
        arr.push(str[i]+count); 
    }
    // if(!arr.includes(str[i])){
    //     arr.push(str[i]+count);
    // }else{
    //      arr[str[i]]=str[i]+count;
    // }
    
    //console.log(`${str[i]}=${count}`);
}
for(let i=0; i<arr.length-1; i++){
    if(arr[i]==arr[i+1]){
        arr[i+1] = undefined;
    }
}
arr.forEach(element => {
    if(element != undefined){
        console.log(element);
    }
});




// let str="Hello";
// console.log(`Input string: ${str}\nOutput frequency of each character:`);
// for(let i=0; i<str.length; i++){
//     let count=0;
//     for(let j=0; j<str.length; j++){
//         if(str[i] == str[j] && str[i]!=" " && str[j]!=" "){
//             count++;
//         }
//     }
//     console.log(`${str[i]}=${count}`);
// }