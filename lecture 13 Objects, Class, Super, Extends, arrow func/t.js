// let t=null
// if(t){
//     console.log("1");
// }else{
//     console.log("2")
// }

let arr=["1","2","3","a",{name:"stoyan"},0];
let t={name:"stoyan"}
let targetElement=arr.indexOf();
console.log(targetElement);
// arr.splice(targetElement,1);
// console.log(arr)
console.log(arr.includes("1"));


let obj ={
    name:"pepi",
    arr: [{name:"sharo"},{name:"maro"}]
}

let ind = arr.find(element => element === {name: "stoyan"});
console.log(obj.arr[0].name)
//console.log(ind)

function test(){
    let arr=[{name: "kur"},{name:"mur"},{name:"ala"}]
    // for(let i=0; i<arguments.length; i++){
    //     for(let j=0; j<arr.length; j++){
    //         if(arguments[i] == arr[j]){
    //             console.log(arguments[i], arr[j]);
    //             console.log("uspqhmeeee");
    //             break;
    //         }
    //     }
    // }
    let t= [];
    for(let i=0; i<arguments.length; i++){
        t.push(arguments[i])
    }
    console.log(t)
}
test("ala", "bala",55, "nica", 22);


let obekt ={
    name:"stoyan",
    car:true,
    darling: true
 };
// console.log(Object.keys(obekt).length)

// let car = function(){
//     let reference = ["make", "model", "price", "fuel", "isItSport"]
//     let resultObj = {};
//     for(let i=0; i<arguments.length; i++){
//         //make, model, price, fuel, isItSport
//         resultObj[`${reference[i]}`] = arguments[i];
//     }
//     return resultObj;
// }

// console.log(car("bmw","318d"));

//da pitam slavi
//arrow


let car = () => {
    let reference = ["make", "model", "price", "fuel", "isItSport"]
    let resultObj = {};
    for(let i=0; i<arguments.length; i++){
        //make, model, price, fuel, isItSport
        resultObj[`${reference[i]}`] = arguments[i];
    }
    return resultObj;
}

console.log(car("bmw","318d"));



// let str = "pesho";
// str = str.split("");
// let isIt = str.filter( el => el == el.toUpperCase())
// console.log(isIt)
// let tr = false;
// let trin =  str ? true : false;
// console.log(trin)