import { userManager } from "../userManager.js";

class LogoutController {

    constructor(userManager) {
        // this.userManager = userManager
    }

    render = () => {

        let logoutBtn = getEl('logoutBtn');
        let loginLink = getEl('loginLink');
        let logoutLink = getEl('logoutLink');
        let registerLink = getEl('registerLink');

        function displaySettings (){
            logoutLink.style.display = 'none';
            logoutLink.classList.remove()
            
            loginLink.style.display = 'block';
            loginLink.classList.add('nav-link');
            registerLink.style.display = 'block';
            registerLink.classList.add('nav-link');
            location.hash = 'login';
        }


        logoutBtn.onclick = (event) => {
            // this.userManager.logout(JSON.parse(localStorage.getItem('loggedTEST')).sessionId)
            userManager.logout(userManager.loggedUser.sessionId)
                .then(data => {
                    localStorage.removeItem('loggedTEST')
                    userManager.loggedUser = null;

                    displaySettings();
                   

                })
                .catch(err => {
                    alert(err);
                    displaySettings();
                    // location.hash = 'login';
                })
        }
    }
}

export let logoutController = new LogoutController();