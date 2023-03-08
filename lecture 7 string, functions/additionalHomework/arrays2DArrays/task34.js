let matrica1=[[1,2,3], //0
              [4,5,6], //1
              [7,8,9]];//2
let transponse=[[],[],[]];

for(let i=0; i<matrica1.length; i++){
    for(let j=0; j<matrica1[i].length; j++){
        transponse[j][i] = matrica1[i][j];
    }
}
console.log(transponse);