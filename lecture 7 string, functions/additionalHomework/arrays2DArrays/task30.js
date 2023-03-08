             //0,1,2
let matrica1=[[1,2,3], //0
              [4,5,6], //1
              [7,8,9]];//2
console.log(`Matrix before interchanging its diagonals:\n${matrica1}`);
let counter=0;
for(let i=0; i<matrica1.length; i++){

    let temp=matrica1[i][counter];
    matrica1[i][counter]=matrica1[i][matrica1[i].length-1-counter];
    matrica1[i][matrica1[i].length-1-counter] = temp;
    counter++;
}

console.log(`Matrix after interchanging its diagonals:\n${matrica1}`);