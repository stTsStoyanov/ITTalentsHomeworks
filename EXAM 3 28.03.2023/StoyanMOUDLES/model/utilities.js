function getEl(id) {
    return document.getElementById(id);
}

function createEl(type) {
    return document.createElement(type);
}

function makeAPICall(url, option) {

    return fetch(url, option)

        .then(response => {
            if (response.ok) {
                return new Promise((res, rej) => {
                    response.json()
                        .then(result => {
                            res(result);
                        })
                        .catch(error => {
                            rej(error);
                        })
                })
            }
            return new Promise((resolve, reject) => {
                response.json()
                    .then(body => {
                        reject(new Error(body.message))
                    })
            })

        }) //when i call login() as a result i will have a new promise which would be the response, json => the body of the response!!!

}

function debounce(action, seconds) { //creating debounce!!!
    let timerId = null;

    return function (...event) {
        clearTimeout(timerId);
        timerId = setTimeout(action, seconds, ...event);
        // timerId = setInterval(action, seconds, ...event);
    }
}