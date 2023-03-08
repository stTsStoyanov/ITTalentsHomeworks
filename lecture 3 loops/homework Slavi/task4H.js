let number=7;
let copyOfNumber=number;
let result="";
let space1="";
let space2="";
let c=0;

for(let row=0; row<number; row++){
    for(let reversedRowCounter=copyOfNumber+2; reversedRowCounter>0; reversedRowCounter--){
        if(row>Math.floor(number/2)){break;}
        space2+=" ";
        c++
        //console.log(`for rowCounter=${reversedRowCounter} we have space.length = ${space2.length}`)
    }
    for(let rowCounter=0; rowCounter<number; rowCounter++){
        
        if(row==0 || row==number-1){
            result+="# ";
        }else{
            if(row<Math.floor(number/2)){
                result+=space1+"#"+space2+"#";
                break;
            }else if(row == Math.floor(number/2)){
                result+=space1+"#";
                break;
            }else{
                space2=space2 - space2[c]
                c--;
                result+=space1+"#"+space2+"#"
            }
            
        }
    }

    space2="";

    space1+="  ";
    copyOfNumber-=space1.length;
    result+="\n";
}
console.log(result);




// let result2="";
// let result3="";
// for(let row=0; row<number; row++){
//     for(let reversedRowCounter=copyOfNumber-1; reversedRowCounter>0; reversedRowCounter--){
//         space+="  ";
//     }
//     for(let rowCounter=0; rowCounter<number; rowCounter++){
//         if(row==0 || row==number-1){
//             result2+="# "
//         }else{
//             result2+=space+"#";
//             break;
//         }
//     }
//     copyOfNumber--;
//     result2+="\n";
//     space="";
// }
// console.log(result2);
