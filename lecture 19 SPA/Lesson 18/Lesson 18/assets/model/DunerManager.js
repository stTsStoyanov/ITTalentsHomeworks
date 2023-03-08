class Duner {
    constructor(name, weight, price, category, image) {
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}



class DunerManager {
    constructor() {
        this.dunerList = DATA.map(duner => new Duner( //creates ARRAY of OBJECTS of type Duner. So we have an array with informaion regarding all duners we have!
            duner.name,
            duner.weight,
            duner.price,
            duner.category,
            duner.image)
        );
    }

    search(keyword) {

        return this.dunerList.filter(duner => {
            return duner.name.toLowerCase().includes(keyword.trim().toLowerCase());
        });

    }


}