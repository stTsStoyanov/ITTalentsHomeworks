class TimeManager {
    constructor(){

    }

    oneDay = () =>{

        // setTimeout(() =>{
        //     let moneyInBank = userManager.loggedUser.moneyInBank;
        //     userManager.loggedUser.moneyInBank += userManager.loggedUser.salary;
        //     userManager.updateUsers();
        // },1000*30);

        setInterval(() =>{
            let moneyInBank = userManager.loggedUser.moneyInBank;
            userManager.loggedUser.moneyInBank += userManager.loggedUser.salary;
            userManager.updateUsers();
        },30000)
    }   

    monthLogic = () =>{

        return new Promise((resolve, reject) =>{
            setInterval(() =>{
                resolve();
                
            },30000)
        });
    }
}

let timeManager = new TimeManager();