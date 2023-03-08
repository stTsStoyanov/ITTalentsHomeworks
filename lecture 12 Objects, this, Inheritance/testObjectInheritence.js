function Person(name, weigth, sex){
    this.name = name;
    this.weigth= weigth;
    this.sex= sex;
}
Person.prototype.mandrusa = function (){
    console.log(`maliiiii ako ${this.name} ta hvane s negoviq mood za ebane, kojto vinagi e ${this.exitet} napravo shte ti skine guzo!`);
}
let stoyan = new Person("Stoyan", 86, "male");
console.log(stoyan)
stoyan.exitet = "Always";
console.log(stoyan.__proto__);// prazen obekt, zashtoto vseki obekt ima "prototype", koito e obekt
console.log(Person.prototype)
stoyan.mandrusa();