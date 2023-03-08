let matrica1=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let matrica2=[[9,8,7],
              [6,5,4],
              [3,2,1]];
let matricaResult=[[],[],[]];
for(let i=0; i<matrica1.length; i++){
    for(let j=0; j<matrica1[i].length; j++){
        matricaResult[i][j] = matrica1[i][j] - matrica2[i][j];
    }
}
console.log(matricaResult);