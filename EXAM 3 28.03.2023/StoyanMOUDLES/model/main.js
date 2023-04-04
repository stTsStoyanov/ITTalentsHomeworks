import { userManager } from "./userManager.js";
import { loginController} from "./controllers/loginController.js"
import { logoutController} from "./controllers/logoutController.js"
import { registerController} from "./controllers/registerController.js"
import { cocktailsManager } from "./cocktailsManager.js";
import { cocktailsController } from "./controllers/cocktailsController.js";
import { detailsController } from "./controllers/detailsController.js";
import { filterController } from "./controllers/filterController.js";

class ViewController {
    constructor(){
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', this.handleHashChange);

    }

    handleHashChange = ()=>{
        const hash = location.hash.slice(1) || PAGE_IDS[0];

        if(!PAGE_IDS.includes(hash)){
            location.hash = '404'
            return;
        }

        let headerId = getEl('headerId');
        if(!userManager.loggedUser){
            headerId.style.display = 'none'
        }else{
            headerId.style.display = 'block';
        }

        if(hash === 'cocktails' && !userManager.loggedUser
         || hash === 'details' && !userManager.loggedUser 
         || hash === 'filters' && !userManager.loggedUser){

            if(userManager.loggedUser){
                let navUsername = getEl('navUsername');
                navUsername.innerText = userManager.loggedUser.username;
            }
            
            location.hash = 'login';
        }else if(hash === 'login' && userManager.loggedUser){
            location.hash = 'cocktails';
        }




        PAGE_IDS.forEach(pageId =>{
            let elements = getEl(pageId);
            hash == pageId ? elements.style.display = 'block' :
                                elements.style.display = 'none';
            

        });


        switch(hash){
            case 'login':
                loginController.render();
                break;
            case 'register':
                registerController.render();
                break;
            case 'logout':
                logoutController.render();

                break;
            case 'cocktails':
                cocktailsController.displaySettings();
                cocktailsController.drinkOfTheDay(); // render drink of the day
                cocktailsController.renderDrinks(); // render other drinks
                break;
            case 'filters':
                filterController.displaySettings();
                filterController.render(); // on filters page render according to the selected filter
                break;


        }
    }
    
}

let viewController = new ViewController();