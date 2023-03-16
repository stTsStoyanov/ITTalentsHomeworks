class User {

    constructor(user, pass) {
        this.username = user;
        this.password = pass;
    }
}

class UserManager {

    constructor() {
        let loggedUser = JSON.parse(localStorage.getItem('isThereUser'));
        if (loggedUser) {
            this.loggedUser = new User(loggedUser.username, loggedUser.password);// log the user from localeStorage as a logged user!

        }

        if(localStorage.getItem('userList')){
            let response = (JSON.parse(localStorage.getItem('userList')));
            this.users.length = 0;
            this.users = [...(JSON.parse(localStorage.getItem('userList')))];
        
        }


    }

    loggedUser = null;
    users = [new User('kami', 'kami123')];
    



    login = ({ username, password }) => {

        //let userExist =this.users.length>1 ? this.users.find(user => user.username === username  && user.password === password) : username === 'kami' && password === 'kami123'; // working only with users from my locale array this.users, if i refresh the page these users are vanished
        //let admin = (username === 'kami' && password === 'kami123')
        //console.log(admin)
        // let currentUsers = JSON.parse(localStorage.getItem('userList')) || this.users; // getting information from the LocaleStorage - working woth multiple users
        let userExist = this.users.find(user => user.username === username && user.password === password);

        if (userExist) {
            this.loggedUser = {username, password};
            localStorage.setItem('isThereUser', JSON.stringify({username, password}));
            let currentUsers = JSON.parse(localStorage.getItem('userList'));
            if(!currentUsers){
                // localStorage.setItem('userList', JSON.stringify(userExist));
                localStorage.setItem('userList', JSON.stringify({username, password}));
            }
            return true;
        }

        return false;

    }


    register = ({ username, password }) => {

        let userExist = this.users.find(user => user.username === username);

        if (!userExist) {
            this.users.push(new User(username, password));
            localStorage.setItem('userList', JSON.stringify(this.users));

            return true;
        }

        return false;
    }

}

let userManager = new UserManager();