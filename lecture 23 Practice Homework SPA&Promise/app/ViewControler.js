class ViewController {

    constructor() {
        window.addEventListener('hashchange', this.handleHashChange)
        window.addEventListener('load', this.handleHashChange)
        this.animalManager = new AnimalManager();
    

    }




    handleHashChange = (event) => { //handler of 'hashchange' and 'load'!
        let hash = window.location.hash.slice(1) || "login";// slice, because the first element is # and we do not want it!

        const pageIds = ["home", "application", "login", "logout", "register"];// id's of our pages ---> from HTML

        

        if (hash === 'home' || hash === 'application') {

            if (!userManager.loggedUser) {
                location.hash = 'login';
                return; // the rest of code in this handler won't be executed!
            }
        }

        let loginLink = document.getElementById('loginLink'); // link in nav bar for login/logout
        let registerLink = document.getElementById('registerLink')
        let span = document.getElementById('span');
        if (userManager.loggedUser) {
            loginLink.innerText = "Logout";
            loginLink.href = '#logout';
            span.innerText = `Currently is logged in user with username: ${userManager.loggedUser.username}`;
            registerLink.style.display = 'none';
        }



        pageIds.forEach(element => {
            let currentPage = document.getElementById(element);

            if (hash === element) {
                currentPage.style.display = 'block';
            } else {
                currentPage.style.display = 'none';
            }
        })

        switch (hash) {
            case "home":
                this.renderMainPage();
                break;
            case "adopted":
                this.renderAdoptPage();
                break;
            case "donate":
                this.renderDonaePage();
                break;
            case 'login':
                this.renderLogin();
                break;
            case 'register':
                this.renderRegister();
                break;
            case 'logout':
                this.renderLogout();
                break;
        }
    }



    renderAnimals = (animalList, container) => {




    }

    renderMainPage = () => {
        let loanPerson = document.getElementById('loanPerson');
        loanPerson.value = userManager.loggedUser.username;

        
    }








    renderRegister = () => {

        let formRegister = document.getElementById('registerForm');
        formRegister.elements.sub.disabled = true;
        let successfulRegister;

        formRegister.addEventListener('input', (e) => {

            let username = e.currentTarget.elements.username.value;
            let password = e.currentTarget.elements.password.value;
            let passConfirm = e.currentTarget.elements.passConfirm.value;

            let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

            if (username && password && passConfirm) {

                e.currentTarget.elements.sub.disabled = false;

                e.currentTarget.elements.sub.addEventListener('click', (btn) => {
                    btn.preventDefault();

                    if (password === passConfirm && //if so -> passwod match and strong password
                        strongRegex.test(password)) {

                        successfulRegister = userManager.register({ username, password });

                        if (successfulRegister) {
                            location.hash = 'login';
                        } else {
                            btn.stopImmediatePropagation();
                            //btn.stopPropagation();
                            console.log(`This user: ${username}, allready exist`);
                        }
                    } else if ((password !== passConfirm)) { // if so -> password missmatch or wrong password
                        //btn.stopImmediatePropagation();
                        //btn.stopPropagation();
                        console.log('Password missmatch or week password / too short password! Please, try again');
                    }

                });
            }
        });
    }



    renderLogout = () => {

        //let formLogout = document.getElementById('logout');
        let logoutFormBtn = document.getElementById('logoutFormBtn');
        let registerLink = document.getElementById('registerLink');

        //formLogout.elements.sub
        logoutFormBtn.addEventListener('click', () => {

            localStorage.removeItem('isThereUser');
            userManager.loggedUser = null;
            location.hash = 'login';
            loginLink.innerText = "Login";
            loginLink.href = '#login';
            registerLink.style.display = 'flex';
        });
    }



    renderLogin = () => {


        let formLogin = document.getElementById('loginForm');// form login
        // let loginNavigation = document.getElementById('loginNav'); // link in nav bar login / logout
        let loginLink = document.getElementById('loginLink'); // link in nav bar for login/logout
        let registerLink = document.getElementById('registerLink');

        formLogin.elements.sub.disabled = true; // via property disabled on HTML btn, we can set value true/false, if true => the button is disabled


        formLogin.addEventListener('input', (e) => {
            e.preventDefault();

            let username = e.currentTarget.elements.username.value;
            let password = e.currentTarget.elements.password.value;
            let remember = e.currentTarget.elements.remember.value || false;

            // console.log(remember)

            if (username && password.length > 5) {
                e.currentTarget.elements.sub.disabled = false;

            }

            e.currentTarget.elements.sub.addEventListener('click', (btn) => {

                btn.preventDefault();


                let successfulLogin = userManager.login({ username, password });

                if (successfulLogin) {
                    location.hash = 'home'
                    registerLink.style.display = 'none';
                    e.currentTarget.elements.username.innerText = '';
                    e.currentTarget.elements.password.innerText = '';
                } else {
                    btn.stopPropagation();
                    console.log(`Invalid username or password.`);
                    //location.reload();
                }

            });

        });


    }


}

let viewController = new ViewController();