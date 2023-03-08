//code with hollow triangle
let hOfTriangle=5;
let copyOfTrianglesH=hOfTriangle;
let star="*"
let result=""
let baseOfTriangle=hOfTriangle*2-1;

for(let row=1; row<=hOfTriangle; row++){
    for(let column=1; column<=baseOfTriangle; column++){
        if(
            column===hOfTriangle - row +1 ||
            column===hOfTriangle + row -1 ||
            row===hOfTriangle){
                result+=" *";
            }else{
                result+="  ";
            }
    }
    console.log(result);
    result="";

}

//code with filled triangle
// let hOfTriangle=3;
// let copyOfTrianglesH=hOfTriangle;
// let star="*"
// let result=""
// for(let counter=0; counter<hOfTriangle; counter++){
//     for(let spaceCount=copyOfTrianglesH; spaceCount>0; spaceCount--){
//         result+=" ";
//     }
//     copyOfTrianglesH--;
//     result+=star
//     console.log(result);
//     star+="**"
//     result=""
// }


// let h=5;
// let star="*"
// for(let counter=0; counter<h; counter++){
//     console.log(star);
//     star+="**"
// }