for(let startNumber=100; startNumber<1000; startNumber++){
    let stotici=Math.floor(startNumber/100);// vzimame purvoto chislo ot tricifrenoto
    let desetici=Math.floor(startNumber%100); //vzimame deseicata ot tricifrenoto
    let chislo=Math.floor(desetici/10); //vzimame chisloto ot dvucifrenoto
    desetici=desetici%10; //vzimame 1-vata cifra ot dvucifrenoto

    if(stotici!=desetici && stotici!=chislo && desetici!=chislo){
        console.log(startNumber);
    }
}