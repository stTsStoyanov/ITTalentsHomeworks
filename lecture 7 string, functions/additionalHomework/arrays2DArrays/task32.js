             //0,1,2
let matrica2=[[1,0,0,0,0], //0
              [3,5,0], //1
              [6,9,1]];//2
let matrica1=[[1,0],
              [1,3]];
let isMatrixLowerTriangle=Boolean;
for(let i=0; i<matrica1.length; i++){
    for(let lastEl=matrica1[i].length-1; lastEl>i; lastEl--){
    console.log(lastEl)
       if(matrica1[i][lastEl] != 0){
           isMatrixLowerTriangle=false;
           break;
       }
   }
}
isMatrixLowerTriangle ? console.log("Yes the matrix is lower triangle") : console.log("NO! The matrix is not lower triangle!");