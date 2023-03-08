             //0,1,2
let matrica1=[[1,2,3], //0
              [0,5,6], //1
              [0,0,9]];//2

let sumOfUpperTriangle=0;
for(let i=0; i<matrica1.length; i++){
   for(let lastEl=matrica1[i].length-1; lastEl>i; lastEl--){
       sumOfUpperTriangle+=matrica1[i][lastEl];
   }
}
console.log(sumOfUpperTriangle)
