class Duner{// duner constructor
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
        this.dunerList = DATA.map(el => new Duner( // DATA is js file where is info regarding all avaliable duner, so i create duner obj for every kind of duner!
            el.image,
            el.name,
            el.weight,
            el.category,
            el.price
        ));
    }

    search(keyword){// search func, gets 'keyword', call filter on every element and if the name contains our keyword we have TRUE, so we return the result!!!!!!
        
        return this.dunerList.filter(element => {
            return element.name.toLowerCase().includes(keyword.trim().toLowerCase());
        });
    }
}