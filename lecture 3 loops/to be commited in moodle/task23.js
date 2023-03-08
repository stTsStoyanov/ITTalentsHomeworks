let number=1;
let row="";

while(number<=9){
    for(let i=number; i<=9; i++){
        row+=`${number} * ${i}; `;
    }
    console.log(row);
    row="";
    number++;
}
