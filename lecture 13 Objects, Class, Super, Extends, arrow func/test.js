class User{

    constructor(name, password, email){
        this.name = name;
        this.password = password;
        this.email = email;
    }
}

class UserManager{

    constructor(){

    }

    users = [new User("Stoyan", "123ghj", "stoyan112@gmial.com")];//zashto pri opit da login-na Stoyan, razbiram, che toj veche e lognat???
    //loggedIn = null;
    loggedIn =[];

    addUser(user){
        const userExist = this.users.filter(u => u.name === user.name);
        //console.log(userExist)
        if(userExist.length > 0){ // if so, from filter check we have element in the array, so the user EXIST
            console.log(`User with username ${user.name} already exist`);
        }else{
            this.users.push(user);
        }
    }

    login(user){
        //if(this.loggedIn){// if true, the user is logged in
        
        //console.log(user)
        //if(this.loggedIn.length > 0){ // works for only one logged in user
        if(this.loggedIn.includes(user)){ //works for multyple logged users
            console.log(`The user ${user.name} is already logged in`);
        }else{
            const userLogged = this.users.filter(u  =>
                u.name === user.name &&
                u.password === user.password);
            if(userLogged.length > 0){//if so, user with this un and pw exist
                //this.loggedIn = user; // works for only one user
                this.loggedIn.push(user) // works for multyple users
                //console.log(this.loggedIn)
            }else{
                console.log(`Wrong username or password`);
            }
        }
        //console.log(`test ${this.loggedIn.includes(user)}`)
        //console.log(this.loggedIn);
    }

    loggedUsers(){ // return logged in users;
        return console.log(this.loggedIn);
    }

    logout(user){ //logout user
        if(this.loggedIn.includes(user)){
            // this.loggedIn.splice(this.loggedIn.indexOf(user),1); // loggedIn is an array with logged in people, with splice i do remove them and they are no longer logged
            this.loggedIn = this.loggedIn.filter(element => element.name !== user.name);// both ways to logout works perfectly
        }
    }

    deleteUser(user){ //delete user
        this.users = this.users.filter(element => element.name !== user.name);
    }

    existingUsers(){// list existing users in system
        return console.log(this.users);
    }
    
}

class Vehicle{

    constructor(make, model, topSpeed, fuel){
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
        this.fuel = fuel;
    }
}

class Car extends Vehicle{
    constructor(make, model, topSpeed, fuel, isItSport){
        super(make, model, topSpeed, fuel);
        this.isItSport = isItSport;
    }
}

class Bike extends Vehicle{
    constructor(make, model, topSpeed,fuel, cC, ){
        super(make, model, topSpeed, fuel);
        this.cC = cC;
    }
}

class Jeep extends Vehicle{
    constructor(make, model, topSpeed, fuel, forByFor){
        super(make, model, topSpeed, fuel);
        this.forByFor = forByFor;
    }
}

class Offer{

    constructor(title, price, photos, description, vehicle, offerCreator){
        this.title = title;
        this.price = price;
        this.photos = photos;
        this.description = description;
        this.vehicle = vehicle;
        this.offerCreator = offerCreator;
    }
}

class OfferManager{

    offers = [];
    comands = ["title", "price","photos", "description","vehicle"];

    constructor(){

    }

    // createOffer(offer){
    //     if(!this.offers.includes(offer)){
    //         this.offers.push(offer);
    //     }
    // }

    addOffer(offer, userManager) {
        // ? operator before property access is called optional chaining
        // this expression will be undefined if userManager is null or undefined or if
        // userManager.loggedUser is null or undefined

        // let creatorIndex = userManager.users.filter(element => element !== offer.offerCreator, console.log(element))
        // console.log(`opaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${creatorIndex.name}`) ///----------->
        // if(offer.offerCreator.name === creatorIndex.name) { //userManager?.loggedIn[creatorIndex]?.name
        //     this.offers.push(offer);
        // }
        userManager.loggedIn.forEach(element => {
            if(offer.offerCreator.name === element.name && // check if the creator is logged in
               !this.offers.includes(offer)){ // check does the offer includes in our offers list.
                this.offers.push(offer);
            }
        });
    }

    deleteOffer(offer, userManager){
        const isCreatorLogged = userManager.loggedIn.includes(offer.offerCreator); // true/false depends if the user is logged in or not
        if(isCreatorLogged){
            this.offers = this.offers.filter(element => element !== offer); // delete offer from offers list
            // this.offers = this.offers.filter(element => element.offerCreator.name !== userManager.loggedIn.forEach(element => ))
        }else{
            console.log("The offer cannot be deleted while user is not logged in!");
        }
    }

    editOffer(offer, userManager, comand, param){
        const isCreatorLogged = userManager.loggedIn.includes(offer.offerCreator);
        // if(isCreatorLogged){
        //     switch(comand){
        //         case 'title':
        //             offer.title = param;
        //             break;
        //         case 'price':
        //             offer.price = param;
        //             break;
        //         case 'photos':
        //             offer.photos.pop();
        //             offer.photos.push(param);
        //             break;
        //         case 'description':
        //             offer.description = param;
        //             break;
        //         case 'vehicle':
        //             offer.vehicle.make = param; // i can add model, year and so on!
        //             break;
        //     }
        // }
        if(isCreatorLogged){
            "//create method inside this method?"
            //this[comand](param); // this + [], kato v skobite podavam comanda, koqto mi idva, kato parametur i ako e pravlno napisana tq otgovarq na method, kojto pravi neshto!
            // ? this[comand](param) : console.log("wrong comand!")
             //let isTheComand = this[comand][param];

            if(this.comands.includes(comand)){
                this[comand](param);
            }else{
                console.log("Wrong comand!")
            }
        }
    }

    title(param){
        offer.title = param;
    }
    price(param){
        offer.price = param;
    }
    photos(param){
        offer.photos.pop()
        offer.photos.push(param);
    }
    description(param){
        offer.description = param;
    }
    vehicle(param){
        offer.vehicle = param;
    }

    // filterOffer(make, model, topSpeed, fuel, isItSport){
    filterOffer(make, model, price, fuel, isItSport){
        let results=[]
        // da probvams s obv.keys() ili kakto e sintaksisa!?!
        for(let i=0; i<arguments.length; i++){
            for(let key in this.offers){
                for(let key2 in this.offers[key]){
                    //if(this.offers[key][key2].vehicle)
                    // console.log(`obekttttttttttt ${this.offers[key].vehicle}`)
                }


                // if(this.offers[key] === arguments[i]){
                
                // }
            }
        }


        // const reference= ["make", "model", "price", "fuel", "isItSport"]
        // const filtredOffers = [];
        // for(let i=0; i<arguments.length; i++){
        //     let match =  this.offers.filter(element => element[reference[i]] === arguments[i]);
        //     console.log("opaaaasdjnajfbwhrfnjxbhdweb"+match)
        // }



        // filtredOffers = this.offers.filter(element => {
        //     if(element.vehicle.make === make || element.vehicle.model === model ||
        //         Number(element.price) <= Number(price) ||
        //         element.fuel === fuel || element.isItSport == isItSport){ return element}
        // });

        // let argumentsList = [];
        // for(let argument=0; argument<arguments.length; argument++){
        //     argumentsList.push(arguments[argument]);
        // }
        // let offerResults=[];
        // for(let argument=0; offer<argumentsList.length; argument++){
        //     for(let offer=0; offer<this.offers.length; offer++){
        //         if(this.offers[offer])
        //     }
        // }
        // console.log(`Offer search set for ${argumentsList}`);
    }  
}



let bmw=new Car("Bmw", "318d", "245", "diesel", true);
let honda = new Car("Honda", "Civic 1.4i", "190", "petrol", false);
let honda2 = new Car("Honda", "Civic 1.6i", "200", "petrol", false);
//console.log(bmw)

let userManager = new UserManager();
let offerManager = new OfferManager();


let chovek = new User("Pesho", "ebanyeMihailovGrad", "peshoSkupoto@gmail.com");
userManager.addUser(chovek)
userManager.login(chovek)

let offer = new Offer("title", "24.500lv",["snimki","Mnimki"], "Mnogo zapazena, karana ot baba", bmw, chovek)
let offer1 = new Offer("title", "12.500lv",["snimki","Mnimki"], "Mnogo zapazena, karana ot baba", honda, chovek);
let offer2 = new Offer("title", "14.500lv",["snimki","Mnimki"], "Mnogo zapazena, karana ot baba", honda2, chovek)

let p = new User("Pima", "111", "pima@gmail.com")
userManager.addUser(p)// add user to users
userManager.login(p) // login user
//userManager.loggedUsers();// list logged in users!
userManager.logout(p); // logout user
//userManager.loggedUsers();
//console.log()
userManager.deleteUser(p)
userManager.existingUsers()
//userManager.deleteUser(); // delete user;
offerManager.addOffer(offer, userManager)
offerManager.addOffer(offer1, userManager)
offerManager.addOffer(offer2, userManager)
//offerManager.deleteOffer(offer,userManager)

offerManager.editOffer(offer, userManager, "vehicle", honda);
console.log(offerManager.offers)
offerManager.filterOffer("Bmw");//make, model, price, fuel, isItSport


