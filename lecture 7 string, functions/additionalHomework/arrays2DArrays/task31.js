             //0,1,2
let matrica2=[[1,2,3], //0
              [0,5,6], //1
              [0,0,9]];//2
let matrica1=[[1,2],
              [0,3]];
let isMatrixUpperTriangle=Boolean;
for(let i=0; i<matrica1.length; i++){
    for(let j=0; j<i; j++){
        if(matrica1[i][j] != 0){
            isMatrixUpperTriangle=false;
            break;
        }
    }
}
isMatrixUpperTriangle ? console.log("Yes the matrix is upper triangle") : console.log("NO! The matrix is not upper triangle!");