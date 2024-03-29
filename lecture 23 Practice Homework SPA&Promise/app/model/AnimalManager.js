class Animal {
    constructor(name, image, type, bread, age, sex, neededAmount, currentlyRisedAmount) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.bread = bread;
        this.age = age;
        this.sex = sex;
        this.neededAmount = neededAmount;
        this.currentlyRisedAmount = currentlyRisedAmount
    }
}


class AnimalManager {
    constructor() {
        this.animalList = DATA.map(animal => new Animal( //creates ARRAY of OBJECTS of type Duner. So we have an array with informaion regarding all duners we have!
            animal.name,
            animal.image,
            animal.type,
            animal.bread,
            animal.age,
            animal.sex,
            animal.neededAmount,
            animal.currentlyRisedAmount)
        );
    }


    neededSum = (animal) =>{
        let neededSum = Number(animal.neededAmount);
        return neededSum;
    }


    currentCum = (animal) =>{
        let currentSum = Number(animal.currentlyRisedAmount);
        return currentSum;
    }


    search(keyword) {

        return this.animalList.filter(animal => {
            return animal.name.toLowerCase().includes(keyword.trim().toLowerCase());
        });

    }


    typeAnimal (keyword){
        return this.animalList.filter(animal =>{
            return animal.type.toLowerCase().includes(keyword.trim().toLowerCase())
        })
    }


    allTypes (){
        let arr =[];

        for(let i=0; i < this.animalList.length; i++){
            if(!arr.includes(this.animalList[i].type)){
                arr.push(this.animalList[i].type);
            }
        }

        return arr;

    }


    adoptedAnimalsList = [];

    adoptManager = (animal) =>{
        
        let animalInAdoptedList = this.adoptedAnimalsList.find(target => target.name === animal.name); //this.adoptedAnimalsList
        // console.log(this.animalList)
        if(animalInAdoptedList){
            let findAnimal = this.adoptedAnimalsList.findIndex(item => item.name === animal.name);
            this.adoptedAnimalsList.splice(findAnimal, 1);
            this.animalList.unshift(animal);

        }else{// if(!animalInAdoptedList){
            let findAnimal2 = this.animalList.findIndex(item => item.name === animal.name);
            this.animalList.splice(findAnimal2, 1);
            this.adoptedAnimalsList.push(animal);
        }
    

      
    }


    donateAnimal = null;

    donateManager = (animal) =>{
        this.donateAnimal = animal;
    }

    // donatedAnimalInfo = () =>{ // does not matter what would be the function!
    donatedAnimalInfo() {
        return this.donateAnimal;
    }

}


