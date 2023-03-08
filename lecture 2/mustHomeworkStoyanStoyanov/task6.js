let a1=5;
let a2=77;
let a3=3;
let temporaryVariable;
// a1->a2 => 77
// a2->a3 =>3
// a3->a1 => 5 

if(typeof a1 == "number" && typeof a2 == "number" && typeof a3 == "number"){
    //[a3, a1, a2] = [a1, a2, a3] //advanced way to be done
    temporaryVariable=a1
    a1=a2  
    a2=a3
    a3=temporaryVariable
    console.log(a1, a2, a3)
}