    for(let lastEl=matrica1[i].length-1; lastEl>i; lastEl--){
    console.log(lastEl)
       if(matrica1[i][lastEl] != 0){
           isMatrixLowerTriangle=false;
           break;
       }
   }