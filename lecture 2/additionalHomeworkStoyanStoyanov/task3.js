let number=5459;

if((Math.floor(number/1000)) == 0){
    console.log("The number contains 0");
}
number-=(Math.floor(number/1000)*1000)
if((Math.floor(number/100)) == 0){
    console.log("The number contains 0");
}
number-=(Math.floor(number/100)*100)
if((Math.floor(number/10)) == 0){
    console.log("The number contains 0");
}
number-=(Math.floor(number/10)*10)
if(number == 0){
    console.log("The number contains 0");
}

//advanced way
// let numberToString=number.toString();
// let flag=false;
// for(let element of numberToString){
//     if(element == 0){
//         flag=true;
//     }
// }
// if(flag){
//     console.log("Yes one of the digits is zero");
// }
// else{
//     console.log("NO, we do not have digit zero in our number");
// }