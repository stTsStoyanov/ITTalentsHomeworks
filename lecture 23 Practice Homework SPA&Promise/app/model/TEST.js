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