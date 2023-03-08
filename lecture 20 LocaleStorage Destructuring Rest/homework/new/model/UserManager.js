class User {

    constructor(user, pass){
        this.username = user;
        this.password = pass;
    }
}

class UserManager {

    constructor(){
        let loggedUser = JSON.parse(localStorage.getItem('isThereUser'));
        if(loggedUser){
            this.loggedUser = new User(loggedUser.username, loggedUser.password);
        }
    }

    loggedUser = null;
    users = [new User('kami', 'kami123')];

    login = ({username, pass}) => {

        let userExist = this.users.find(user => user.username === username  && user.password === pass);

        if(userExist){
            this.loggedUser = userExist;
            localStorage.setItem('isThereUser', JSON.stringify(this.loggedUser));
            // this.users.push(new User(username, pass));
            return true;
        }

        return false;

    }
}