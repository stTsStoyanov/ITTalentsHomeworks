let api = "https://jsonplaceholder.typicode.com/users";
let select = document.getElementById('emails');
let posts = document.getElementById('posts');
let albums = document.getElementById('albums');
let toDos = document.getElementById('toDos');
let albumPhotos = document.getElementById('albumPhotos');
let broika = 0;


function myFetch(url) {
    return fetch(url)
        .then(request => {
            if (request.ok) {
                return request.json();
            } else {
                console.log('Someting went wrong');
            }
        })
}


myFetch(api) // return response with all users!
    .then(body => {

        body.forEach(el => {

            let option = document.createElement('option');
            option.innerText = el.email;
            select.append(option);
        })

        return body;
    })

    .then(body => {

        select.addEventListener('change', (e) => {
            console.log(e.target.value)
            body.forEach(user => {

                if (user.email == e.target.value) {
                    myFetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`) //returns response with posts
                        // request to get all users posts 

                        .then(post => {

                            posts.innerHTML = "";
                            let h1 = document.createElement('h1');
                            h1.innerText = 'POSTS:'
                            posts.append(h1);

                            post.forEach(el => {

                                let h1 = document.createElement('h1');
                                let p = document.createElement('p');
                                h1.innerText = el.title;
                                p.innerText = el.body;
                                posts.append(h1, p);

                            })
                            let p = document.createElement('p');
                            p.innerText = '---------------------------------------------------------------------------------------';
                            posts.append(p);

                        })

                        .catch(err => console.log(err));


                    myFetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
                        // request to get all albums, after that to append them to the HTML with id and title of the album!

                        .then(album => {

                            albums.innerHTML = "";

                            let h1 = document.createElement('h1');
                            h1.innerText = 'ALBUMS:'
                            albums.append(h1);

                            album.forEach(el => {

                                let h1 = document.createElement('h1');
                                let p = document.createElement('p');
                                h1.innerText = el.id;
                                p.innerText = el.title;
                                albums.append(h1, p);
                            })
                            let p = document.createElement('p');
                            p.innerText = '---------------------------------------------------------------------------------------';
                            albums.append(p)
                        })
                        .catch(err => console.log(err));


                    myFetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
                        // request to get all user toDos

                        .then(toDo => {

                            toDos.innerHTML = "";

                            let h1 = document.createElement('h1');
                            h1.innerText = 'TO DO LIST:'
                            toDos.append(h1);

                            toDo.forEach(el => {

                                if (!el.completed) {  //to get only uncompleated tasks!
                                    let h1 = document.createElement('h1');
                                    h1.innerText = el.title;
                                    toDos.append(h1);
                                }
                            })
                            let p = document.createElement('p');
                            p.innerText = '---------------------------------------------------------------------------------------';
                            toDos.append(p)
                        })
                        .catch(err => console.log(err));


                    myFetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
                        // request for albums, after that another request for photos for each album

                        .then(album => {

                            let allPhotosCount = 0;
                            album.forEach(el => {

                                myFetch(`https://jsonplaceholder.typicode.com/albums/${el.userId}/photos`)
                                    //request for each album by curent user id
                                    .then(photo => {

                                        console.log(photo.length);
                                        return allPhotosCount += photo.length
                                    })
                                    .then(count => {
                                        albumPhotos.innerHTML = "";
                                        let h = document.createElement('h1');
                                        h.innerText = "Album Photos:"
                                        let h1 = document.createElement('h1');
                                        h1.innerText = `All photos are: ${count}`
                                        albumPhotos.append(h, h1);
                                        broika = count;
                                        console.log(`All photos are: ${count}`);
                                    })
                            })

                        })
                        .catch(err => console.log(err));

                } // end of if statemant
            }) // end of forEach itaration

        }) // end of the eventListener 'change'
        return body;
    }) //end of .then

    .catch(err => {
        console.log(err);
    });