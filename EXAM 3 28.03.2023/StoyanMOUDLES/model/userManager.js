class UserManager {

    constructor(){
        this.loggedUser = JSON.parse(localStorage.getItem('loggedTEST'));

    }

    loggedUser = null;


    register = (username, password) =>{

        return makeAPICall(SERVER_URL + '/users',{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
    }


    login = (username, password) =>{

        return makeAPICall(SERVER_URL + '/login',{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        //when i call login() as a result i will have a new promise which would be the response, json => the body of the response!!!
        .then(({hasVoted, sessionId, username}) =>{
            localStorage.setItem('loggedTEST', JSON.stringify({hasVoted, sessionId, username}));
            this.loggedUser = {hasVoted, sessionId, username};
        })
    } 

    logout = (sessionId) =>{

        return makeAPICall(SERVER_URL + '/logout',{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id : sessionId
            })
        })
        .then(data =>{
            // localStorage.removeItem('loggedTEST')
            // this.userManager.loggedUser = null;
        })
    }
}

export let userManager = new UserManager()
// export {userManager};