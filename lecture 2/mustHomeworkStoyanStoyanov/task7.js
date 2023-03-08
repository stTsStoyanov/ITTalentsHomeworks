let hour = 23;
let money=9.9;
let amIhealthy = true;

if(amIhealthy){
    if(money<10){
        console.log("I am going out to drink coffe :)")
    }
}
else{
    console.log("I am ill, not going out :(")
    if(money>0 && money!=undefined){
        console.log("I will buy some medicines to get better soon!")
    }
    else{
        console.log("I have no money, so I will stay at home and drink tea...")
    }
}