import { userManager } from "../userManager.js";

class RegisterController {

    constructor(userManager) {
        // this.userManager = userManager
    }

    render = () => {

        let form = getEl('registrerForm');
        let registerBtn = getEl('registerBtn')
        registerBtn.disabled = true;

        let username = null;
        let password = null;
        let passwordConfirm = null;

        form.oninput = (event) => {
            event.preventDefault();

            username = event.currentTarget.elements.username.value;
            password = event.currentTarget.elements.password.value;
            passwordConfirm = event.currentTarget.elements.passwordConfirm.value;

            
            if (password && passwordConfirm && password.length == passwordConfirm.length) {
                registerBtn.disabled = false;
            }else{
                registerBtn.disabled = true;
            }

        }


        form.onsubmit = (event) => {
            event.preventDefault();

            userManager.register(username, password)
                .then(data => {
                    location.hash = 'login';
                })
                .catch(err => {
                    alert(err)
                })

        }



        // form.onsubmit = (event) => {
        //     event.preventDefault();

        //     let { username: { value: username },
        //         password: { value: password },
        //         passwordConfirm: { value: passwordConfirm }
        //     } = event.currentTarget;

        //     if (password === passwordConfirm) {
        //         console.log(password, passwordConfirm)
        //         registerBtn.disabled = false;

        //         this.userManager.register(username, password)
        //             .then(data => {
        //                 location.hash = 'login';
        //             })
        //             .catch(err => {
        //                 alert(err)
        //             })
        //     }

        // }
    }
}

export let registerController = new RegisterController();