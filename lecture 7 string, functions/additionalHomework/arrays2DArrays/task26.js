let matrica1=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let matrica2=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let areTheMatricesEqual=true;
for(let i=0; i<matrica1.length; i++){
    for(let j=0; j<matrica1[i].length; j++){
        if(matrica1[i][j] != matrica2[i][j]){
            areTheMatricesEqual=false;
            break;
        }
    }
}
areTheMatricesEqual ? console.log(`Both matrices are equel`) : console.log(`The matrices are NOT equal`);