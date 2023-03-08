let number=8;
let result="";
let space=""
let copyOfNumber=1;
let numberOfSpaces=number;
let r=""

for(let i=1; i<=number; i++){
    for(let spaceCounter=0; spaceCounter<numberOfSpaces; spaceCounter++){
        space+="  ";
    }
    result+=space;
    for(let j=copyOfNumber; j>=1; j--){
        result+=" "+j;
    }
    // for(let j=1; j<=copyOfNumber; j++){
    //     result+=" "+j;
    // }

    
    for(let c=copyOfNumber; c>=1; c--){
        r+=c + " ";
    }

    r+="\n";
    result+="\n";
    numberOfSpaces--;
    copyOfNumber++;
    space="";
}



// for(let i=1; i<=number; i++){
//     for(let i=0; i<numberOfSpaces; i++){
//         space+="  ";
//     }
//     r+=space;
//     for(let j=copyOfNumber; j>=1; j--){
//         r+=" "+j;
//     }
//     r+="\n";
//     numberOfSpaces--;
//     copyOfNumber++;
//     space="";
// }


console.log(result, r);