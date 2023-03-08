// let throws=0;
// let times=0;
// function zarove(){
//     return Math.ceil(Math.random()*6);
// }
// while(throws != 3){
//     let zar1=zarove()//Math.ceil(Math.random()*6);
//     let zar2=zarove()//Math.ceil(Math.random()*6);// i taka stava
//     let zar3=Math.ceil(Math.random()*6);// i taka stava!
//     //console.log(zar1, zar2, zar3);
//     if(zar1 + zar2 + zar3 === 18){
//         throws++;
//     }else{
//         throws=0;
//     }
//     times++;
// }
// console.log(times)


////////////////////////////// task 2


let forWords=true;
let input="Today is a grEat day for test";
if(typeof input == "string"){
    let arr = input.toLowerCase().split(" ");
    for(let i=0; i<arr.length; i++){
        if(arr[i].length >=6){
            forWords=false;
            break;
        }
    }
    if(forWords){
        arr.length=4;
        //str.join("-");
    }else{
        arr.length=3;
        //str.join("-");
    }
    console.log(arr.join("-"));
}else{
    console.log("Wrong input, is not string");
}

///////////////////////////////// TASK 3!

// function task3(arr, index=0, result =0){
//     if(index > arr.length){
//         return result;
//     }
//     if(arr[index] %2 ==0){
//         result++;
//     }else{
//         result--;
//     }
//     return task3(arr, ++index, result);
// }

// let final = task3([1,2,3,4,5]);
// if(final > 0){
//     console.log("Chetnite sa poveche");
// }else if(final < 0){
//     console.log("Nechetnite sa poveche");
// }else if(final===0){
//     console.log("ravni sa");
// }