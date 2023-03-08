class Duner{
    constructor(image,name, weight,category,price){
        this.image=image;
        this.name=name;
        this.weight=weight;
        this.category=category;
        this.price=price;
       
    }
}

class DunerManager{
    constructor(){
        this.dunerList=DATA.map(duner=>new Duner(
            duner.image,
            duner.name,
            duner.weight,
            duner.category,
            duner.price
        ))
    }

    searchF(keyword) {
        return this.dunerList.filter(duner=>{
            return duner.name.toLowerCase().includes(keyword.trim().toLowerCase());
        })
    }
}



























    // search(keyword) {

    //     return this.dunerList.filter(duner => {
    //         return duner.name.toLowerCase().includes(keyword.trim().toLowerCase());
    //     });

    // }

