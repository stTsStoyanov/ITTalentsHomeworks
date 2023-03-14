let search = document.getElementById('search');
let movieResult = document.getElementById('movieResult');
movieResult.innerText = 'Loading...'

search.addEventListener('input', (e) => {

    movieResult.innerHTML = '';
    movieResult.innerText = 'Loading...'
    // let img = document.createElement('img');
    // img.src = "./assets/loading.gif"
    // movieResult.appendChild(img);

    fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=2150216b`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('Something went wrong...');
            }
        })
        .then(movies => {
            console.log(movies)
            if (movies.Search && movies.Search.length) { // other ways i got error in renderMovies funntion at forEach iteration
                movieResult.innerHTML = '';
                renderMovies(movies.Search);
            }

        })
});

function renderMovies(movies) {

    movies.forEach(element => {
        if (element !== undefined) {
            let span = document.createElement('span');
            span.innerText = element.Title;
            span.addEventListener('click', (e) => {
                let img = document.createElement('img');
                img.src = element.Poster;
                img.style.width = '500px';
                img.style.height = '500px';
                movieResult.appendChild(img);
            })
            movieResult.appendChild(span)
        }

    });

}