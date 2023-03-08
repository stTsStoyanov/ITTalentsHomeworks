let hOfTriangle=5;
let copyOfTrianglesH=hOfTriangle;
let star="*"
let result=""
for(let counter=0; counter<hOfTriangle; counter++){
    for(let spaceCount=copyOfTrianglesH; spaceCount>0; spaceCount--){
        result+=" ";
    }
    copyOfTrianglesH--;
    result+=star
    console.log(result);
    star+="**"
    result=""
}




















// let h=4;
// let h2=h;
// let star="";
// let space=" "
// for(let counter=0; counter<h; counter++){
//    for(spaceCounter=1; spaceCounter<=h; spaceCounter++){
//     star+=" "
//    }
//    for(let starCounter=0; starCounter<=counter; starCounter++){
//     if(counter==0){
//         star+="*"
//     }
//     else{
//         star+="**"
//     }
    
//    }
//    console.log(star)
//    star=""
//     // console.log(`${space=space*h2}${star}`);
//     // h2--;
//     // star+="**"
// }
