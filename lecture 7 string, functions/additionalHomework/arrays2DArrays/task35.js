let matrica1=[[1,0,0], //0
              [0,1,0], //1
              [0,0,1]];//2
let isTheMatrixIdentity=true;
for(let i=0; i<matrica1.length; i++){
    for(let j=0; j<i; j++){ //proverka otdolu
        if(matrica1[i][j] != 0){
            isTheMatrixIdentity=false;
            break;
        }
    }
    for(let lastEl=matrica1[i].length-1; lastEl>i; lastEl--){//proverka otgore
           if(matrica1[i][lastEl] != 0){
               isTheMatrixIdentity=false;
               break;
           }
       }
}
console.log(isTheMatrixIdentity);