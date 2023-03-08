let matrica1=[[1,2,3],
              [4,5,6],
              [7,8,9]];
let matrica2=[[9,8,7],
              [6,5,4],
              [3,2,1]];
let matrica3=[[],[],[]];

for(let row=0; row<matrica1.length; row++){
    for(let possition=0; possition<matrica1[row].length; possition++){
        let matricaOnePossitino=0;
        let matricaTwoRow=0;
        let value=0;
        for(let iterations = 0; iterations<matrica1[row].length; iterations++){
            value += (matrica1[row][matricaOnePossitino] * matrica2[matricaTwoRow][possition]);
            matricaOnePossitino++;
            matricaTwoRow++;
        }    
        matrica3[row][possition] = value;    
    }
}
console.log(matrica3)