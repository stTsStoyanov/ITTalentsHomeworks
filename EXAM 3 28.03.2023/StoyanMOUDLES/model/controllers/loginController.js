import { userManager } from "../userManager.js";

class LoginController {

    constructor() {
    }

    render = () => {
        localStorage.removeItem('loggedTEST')
        userManager.loggedUser = null;

        let form = getEl('loginForm');
        let loginLink = getEl('loginLink');
        let logoutLink = getEl('logoutLink');
        let registerLink = getEl('registerLink');

        form.onsubmit = (event) => {
            event.preventDefault();

            let { username: { value: username },
                password: { value: password }
            } = event.currentTarget;

            userManager.login(username, password)
                .then(data => {
                    location.hash = 'cocktails';

                    logoutLink.style.display = 'block';
                    logoutLink.classList.add('nav-link')

                    loginLink.style.display = 'none';
                    loginLink.classList.remove();
                    registerLink.style.display = 'none';
                    registerLink.classList.remove();
                    
                    let navUsername = getEl('navUsername');
                    navUsername.innerText = username;
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

}

export let loginController = new LoginController();