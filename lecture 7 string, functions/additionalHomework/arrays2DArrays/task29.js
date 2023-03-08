            // 0,1,2
let matrica1=[[1,2,3], //0
              [4,5,6], //1
              [7,8,9]];//2
let rows=[];
let colums=[];
for(let i=0; i<matrica1.length; i++){
    let row=0;
    let colum=0;
    for(let j=0; j<matrica1[i].length; j++){
        row+=matrica1[i][j];
    }
    for(let k=0; k<matrica1[i].length; k++){
        colum+=matrica1[k][i];
    }
    rows.push(`Sum of row ${i+1} = ${row}`);
    colums.push(`Sum of column ${i+1} = ${colum}`);
}
console.log(`Output:\n${rows}\n${colums}`);