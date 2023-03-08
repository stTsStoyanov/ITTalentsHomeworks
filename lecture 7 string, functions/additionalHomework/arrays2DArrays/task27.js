let matrica1=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let sumOfMainDiagonal=0;
let possition=0;
for(let i=0; i<matrica1.length; i++){
    sumOfMainDiagonal+=matrica1[i][possition];
    possition++;
}
console.log(sumOfMainDiagonal);