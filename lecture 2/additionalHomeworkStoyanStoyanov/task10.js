//input 1-52!
//cards 13 times per 4 cards =>52cards
//input/4 => card range (13 ranges per 4 cards)
//input%4 => exact color of the card!!!
// 2,2,2,2 -> 1to4
//3,3,3,3 - 5to8
// 4,4,4,4- 9to12
// 5,5,5,5- 13to16; 17to20, 21to24, 25-28, 29to32, 33to36, 37to40, 41to44, 45to48, 49to52
//boq : 0->pika; 3->kupa; 2->karo; 1->spatiq

let number=52;

if (number>0 && number<53){
    let exactCard = Math.ceil(number/4);// card kind
    if (exactCard>=1 && exactCard<=9){
        if(number%4 == 0){// card color
            console.log(`The card is: ${exactCard+1} and the color is pika`);
        }
        else if(number%4 == 3){
            console.log(`The card is: ${exactCard+1} and the color is kupa`);
        }
        else if(number%4 == 2){
            console.log(`The card is: ${exactCard+1} and the color is karo`);
        }
        else if(number%4 == 1){
            console.log(`The card is: ${exactCard+1} and the color is spatia`);
        }
    }
    else if (exactCard>=10 && exactCard<=13){

        if(number%4 == 0 && exactCard == 10){
            console.log(`The card is: Vale and the color is pika`);
        }
        else if(number%4 == 0 && exactCard == 11) {
            console.log(`The card is: Dama and the color is pika`);
        }
        else if(number%4 == 0 && exactCard == 12){
            console.log(`The card is: Pop and the color is pika`);
        }
        else if(number%4 == 0 && exactCard == 13){
            console.log(`The card is: Aso and the color is pika`);
        }

        if(number%4 == 3 && exactCard == 10){
            console.log(`The card is: Vale and the color is kupa`);
        }
        else if(number%4 == 3 && exactCard == 11) {
            console.log(`The card is: Dama and the color is kupa`);
        }
        else if(number%4 == 3 && exactCard == 12){
            console.log(`The card is: Pop and the color is kupa`);
        }
        else if(number%4 == 3 && exactCard == 13){
            console.log(`The card is: Aso and the color is kupa`);
        }

        if(number%4 == 2 && exactCard == 10){
            console.log(`The card is: Vale and the color is karo`);
        }
        else if(number%4 == 2 && exactCard == 11) {
            console.log(`The card is: Dama and the color is karo`);
        }
        else if(number%4 == 2 && exactCard == 12){
            console.log(`The card is: Pop and the color is karo`);
        }
        else if(number%4 == 2 && exactCard == 13){
            console.log(`The card is: Aso and the color is karo`);
        }

        if(number%4 == 1 && exactCard == 10){
            console.log(`The card is: Vale and the color is spatia`);
        }
        else if(number%4 == 1 && exactCard == 11) {
            console.log(`The card is: Dama and the color is spatia`);
        }
        else if(number%4 == 1 && exactCard == 12){
            console.log(`The card is: Pop and the color is spatia`);
        }
        else if(number%4 == 1 && exactCard == 13){
            console.log(`The card is: Aso and the color is spatia`);
        }
    }
}