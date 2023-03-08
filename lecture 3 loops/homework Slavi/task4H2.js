let number = 7;
let copyOfNumber=number;
let result=""
let space="";
let spaceRow = "";
let spaceRevercedRow="";
let i=5;
let center=0;
if(number%2==0){
    center=number/2;
}else{
    center=Math.floor(number/2)+1;
}

for(let row=0; row<number; row++){
    for(let reversedRowCounter=0 ; reversedRowCounter<i; reversedRowCounter++){
                spaceRevercedRow+=" ";
            }
    for(let element=0; element<number; element++){
        if(row==0 || row==number-1){
            result+="# ";
        }else{
            if(row+1 != center){
                result+=space+"#"+spaceRevercedRow+" #"
                break;
            }else{
                result+=space+"#";
                break;
            }
        }
    }

    space+="  ";
    spaceRevercedRow="";
    result+="\n";
    i--;
}










// for(let row=0; row<number; row++){
//     for(let reversedRowCounter=copyOfNumber-1 ; reversedRowCounter>0; reversedRowCounter--){
//         spaceRevercedRow+="  ";
//     }

//     for(let rowCounter=0; rowCounter<number; rowCounter++){
//         if(row==0 || row==number-1){
//             i++
//             result+=" #";
//         }else{
//             if(i<= Math.round(number/2)){

//                 i++;
//             }else{
//                 let n=0;
//                 let c=number-i
//                 while(n<i){
//                     reversedRowCounter-="  ";
//                     n++;
//                 }
//                 result+=spaceRow+" #"+spaceRevercedRow+"# ";
//                 i++;
//                 break;
//             }
//             result+=spaceRow+" #"+spaceRevercedRow+"# ";
//             break;
//         }
//     }
// //------------------
//     copyOfNumber--;
//     spaceRevercedRow="";
//     spaceRow+="  ";
//     result+="\n";

// }
console.log(result)