const json = '[{"result":true, "count":42}]';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj);
// Expected output: true


let s={};
let a=[{name:'stoyan'},{name:'kami'},{name:'mimi'}];
for(let i=0; i<a.length; i++){
  s+=a[i];
}
// console.log(typeof s)

let ala = [{name:'klaak'}, {sex:"yes"}];
let g =JSON.stringify(ala);
console.log(g)
g = JSON.parse(g)
g.push({opa: 'qko'})
//g += JSON.stringify()
//let z = JSON.parse(g);
console.log("zzz", g)


let num = Math.floor((Math.random()*1000));
// console.log(num)


// function f(){
//   return new Promise((resolve, reject) =>{
//     console.log('opaaaaaaa');
//     resolve('mqu')
//   })
// }

// f().then(test =>{
//   console.log(test)
//   console.log('mursh')
//   return 'mursha'
// })
// .then(m =>{
//   console.log(m)
// })


//nasheto
// function c(input,minput){
//   return new Promise((r,s) => {
//     let id = setTimeout(() =>{
//       r([input,minput]);
//       s(id)
//     },1000);

//   })
// }

// c('kurviiiiii', 'ooo').then((a) =>{
//   // clearTimeout(data[_idleStart])
//   console.log(a);
// })
// .catch(lol =>{
//   clearTimeout(lol)
// })


//robot

// function c(input, minput) {
//   let timeoutId;
//   return new Promise((resolve, reject) => {
//     timeoutId = setTimeout(() => {
//       resolve([input, minput]);
//     }, 1000);
//   })
//   .then((result) => {
//     console.log(result);

//     // if(cancel){ //btn eventlistener 'click'

//     // }

//     clearTimeout(timeoutId);
//   })
//   .catch((error) => {
//     console.log(error);
//     clearTimeout(timeoutId);
//   });
// }
// // Call the c function
// c('kurviiiiii', 'ooo');



// robot 2!!!!!!!!!!!!!
// function c(input, minput) {
//   let timeoutId=null;
//   return new Promise((resolve, reject) => {
//     timeoutId = setTimeout(() => {
//       resolve([input, minput]);  //[input, minput]
//     }, 1000);
//   })
//   .then((result) => {
//     if (result) {
//       console.log(result);
//       console.log(timeoutId)
//       clearTimeout(timeoutId);
//     } else {
//       clearTimeout(timeoutId)
//       console.error('No result');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//     clearTimeout(timeoutId);
//   });
// }

// // Call the c function
// c('kurviiiiii', 'ooo');




//robot 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function c(input, minput) {
//   let timeoutId;
//   return new Promise((resolve, reject) => {
//     timeoutId = setTimeout(() => {
//       resolve([input, minput]);
//     }, 3000);
//   })
//   .then((result) => {
//     if (Math.random() > 0.5) {
//       console.log(result);
//       clearTimeout(timeoutId);
//     } else {
//       console.log('Timeout not cleared');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//     clearTimeout(timeoutId);
//   });
// }

// // Call the c function
// c('kurviiiiii', 'ooo');


//robot 4!
function asa(){
  return 8;
}

function sayHello(a) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve(asa());
    }, 5000);

    if (a < 1) {
      clearTimeout(timeoutId);
      resolve('Immediate');
    }
  });
}

sayHello(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


console.log(num)

///=---------------------------------------
// function requestLoan(){
//   let timeoutId;
//   return new Promise((resolve, reject)=>{
//     timeoutId = setTimeout(() => {
//       //let data = localStorage.get('something');
//       resolve('data');
//     }, 1000);
//   })
//   // .finally(() => {
//   //   clearTimeout(timeoutId);
//   // });
// }
// requestLoan.then(e => {
  
// })






// if(0){
//   c('kurviiiiii').then(data =>{
//     console.log(data);
//   })
// }else{
//   c().catch(lol =>{
//     clearTimeout(lol)
//   })
// }





