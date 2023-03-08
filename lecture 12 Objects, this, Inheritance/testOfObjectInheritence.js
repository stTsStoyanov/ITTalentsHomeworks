// function Person(name, age, lacation){
//     this.name = name;
//     this.age = age;
//     this.lacation = lacation
// }
// Person.prototype.test = "yraaaa";


// function Bulgarian(name, age, location){
//     Person.call(this, name, age, location);
//     this.sex = "ebach";
// }
// Bulgarian.prototype = Object.create(Person.prototype);
// Bulgarian.prototype.constructor = Bulgarian;
// let stoyo = new Bulgarian("stoyo", 26, "SF");
// console.log(stoyo.test)
// console.log(stoyo.__proto__.__proto__.__proto__.__proto__)



let dog = {
    name: "Sharo",
    bread: "Street fighter",
    isAGoodBoy: true,
    weight: 32,
    byte: function () {
        console.log(this.name + " is biting...");
    }
}

//console.log(dog);

function Dog(name, bread, weight) {
    this.name = name;
    this.bread = bread;   
   
    this.weight = weight;
    this.byte = function (param) {
        console.log(param + " is biting...");
    }
    this.isAGoodBoy = true;
}

let x= new Dog("jack", "jack rusel", 6);
x.byte(x.name)
console.log(x)
let glutnica = [
    {name: "Bobby", bread: "Husky", weight: 28},
    {name: "Rex", bread: "Labrador", weight: 28},
    {name: "Johny", bread: "Pincher", weight: 28},
    {name: "Momchil", bread: "Chihuahua", weight: 28},
    {name: "Mbappe", bread: "Buldog", weight: 28},
    {name: "Mr. Worldwide", bread: "Pitbul", weight: 28}
];

let dogsObjects = glutnica.map( 
    item => new Dog(item.name, item.bread, item.weight)
); 

let firstDog = dogsObjects[0];

//console.log(firstDog);