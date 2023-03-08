class Duner{
    constructor(image, name, weight, category, price){
        this.image = image;
        this.name = name;
        this.weight = weight;
        this.category = category;
        this.price = price;
    }
}

class DunerManager{
    constructor(){
        this.dunerList = DATA.map(element => new Duner(
            this.image = element.image,
            this.name = element.name,
            this.weight = element.weight,
            this.category = element.category,
            this.price = element.price
        ));
    }

    search(keyword){
        return this.dunerList.filter(element => {
            return element.name.toLowerCase().includes(keyword.trim().toLowerCase());
        });
    }
}