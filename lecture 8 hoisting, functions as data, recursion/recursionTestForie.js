function rec(n){
    if(n===1){
        return 1;
    }
    return n*rec(--n);
}
//console.log(rec(5));
//let arr=['ala','bala','nica','turska','panica'];
let copy;
function rec2(arr2,possition){
    let lengthArr = arr2.length;
    if(possition == lengthArr){//base case
        return;
    }
    console.log(arr2[possition]);
    return rec2(arr2, ++possition);//recursive step
}

//rec2(arr,0,copy)

// task -> Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers
function greatestDivisor(a,b,devisor){
    let current;
    if(a%devisor ==0 && b%devisor==0 || devisor>= a || devisor >= b){
        return;
    }

    return greatestDivisor(a,b,++devisor)
}
//console.log(greatestDivisor(12,18,1));


//task -> Write a JavaScript program to get the integers in range (x, y)
function getIntegersInRange(x,y,number){
    //let number=x+1;
    if(number==y){// base case-> if number == na upper range 
        return
    }
    //console.log(number);
    return getIntegersInRange(x,y,++number); //recursion step
}
//console.log(getIntegersInRange(2,9,3));

//task -> Write a JavaScript program to compute the sum of an array of integers.
//let arr=[1,2,3,4,5,6];
// let test = function computeSum(array,counter,result){
//     let length=array.length;
//     if(counter==length){
//         return;
//     }
//     //result+=array[counter];
   
//     //computeSum(array,++counter,result+=array[counter]);
//     return array[counter] + test(array,++counter);;
//     //return result+=array[counter];

// }
//console.log(computeSum(arr,0,0));

// opit 2
let arr=[1,2,3,4,5,6];
// let stoyan = function(array){
//     if(array.length ==  1){
//         return array[0];
//     }
    
//     return array.pop() + stoyan(array);
// }
//console.log(stoyan(arr))

let petkan = function(array,counter,r){
    if(counter == array.length){
        return;
    }
    //r+=array[counter];
    petkan(array, ++counter)
    return array[counter];
    
}
//console.log(petkan(arr,0))




//let oho=[1,2,3];
let oho="1,2,3";
function oh(numb, counter,array, result){
    if(numb == counter){
        return
    }
    //result.push(array[numb]); //-> pri uslovie che result e array, ne raboti!
    //result+= array[numb];// -> pri uslovie, che result e chislo, izkarva samo edna 1-ca, ne raboti!
    //result+=array[numb];// - > pri uslovie, che result e string, otnovo ne raboti!
    //console.log(array[numb])
    result+=array[numb];
    oh(++numb, counter, array)
    return result
}
console.log(oh(0,oho.length,oho,""));
