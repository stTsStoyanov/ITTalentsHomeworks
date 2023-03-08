let matrica1=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let sumOfSecondDiagonal=0;

for(let i=0; i<matrica1.length; i++){
    let possition=matrica1[i].length-1 -i;
    sumOfSecondDiagonal+=matrica1[i][possition];
}
console.log(sumOfSecondDiagonal);