let number=17571;

do{
    if( typeof number=="number"){
        let desetkiHilqdi=Math.floor(number/10000);
        let hilqdi=Math.floor(number/1000);
        hilqdi=Math.floor(hilqdi%10)
        let stotici=Math.floor(number%1000/100);
        let desetici=Math.floor(number%100);
        let chislo=desetici%10;
        desetici=Math.floor(desetici/10);

        if(number>=10 && number<=99){
            if(desetici==chislo){console.log("Chisloto e palindrom");}
            else{console.log("Chisloto ne e palindrom!!!")}
        }
        else if(number>=100 && number<=999){
            if(stotici==chislo){console.log("Chisloto e palindrom");}
            else{console.log("Chisloto ne e palindrom!!!")}
        }
        else if(number>=1000 && number<=9999){
            if(hilqdi==chislo && stotici==desetici){console.log("Chisloto e palindrom");}
            else{console.log("Chisloto ne e palindrom!!!")}
        }
        else if(number>=10000 & number<=30000){
            if(desetkiHilqdi==chislo && hilqdi==desetici){console.log("Chisloto e palindrom");}
            else{console.log("Chisloto ne e palindrom!!!")}
        }
    }
}while(console.log==true);