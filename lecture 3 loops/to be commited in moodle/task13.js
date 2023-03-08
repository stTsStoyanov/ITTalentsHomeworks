let sum=Math.floor(Math.random()*25)+2;//random number between 2 and 27
//let sum=26
for(let currentNumbet=100; currentNumbet<1000; currentNumbet++){
    let stotici=Math.floor(currentNumbet/100);
    let deseicati=Math.floor(currentNumbet%100);
    let chislo=Math.floor(deseicati%10);
    deseicati=Math.floor(deseicati/10);

    if(stotici+deseicati+chislo == sum){
        console.log(currentNumbet);
    }
}
console.log(sum)