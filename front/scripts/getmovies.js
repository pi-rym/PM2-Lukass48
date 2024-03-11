
function renderMovies(movie){
    const movieElement = document.createElement('article');

    movieElement.classList.add('movieContainer');

    movieElement.innerHTML = `<img class="imgMovie" src = "${movie.poster}" alt="${movie.title}">`

    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.classList.add('divMovie');

    movieInfoContainer.innerHTML = `
    <h5 class="cardTitle">${movie.title} (${movie.year})</h5>
    <p class="cardText"><strong>Director:</strong> ${movie.director}</p>
    <p class="card-text"><strong>Duration:</strong> ${movie.duration}</p>
    <p class="card-text"><strong>Genre:</strong> ${movie.genre}</p>
    <p class="card-text"><strong>Rate:</strong> ${movie.rate}</p>
    `

    movieElement.appendChild(movieInfoContainer)
    movieContainer.appendChild(movieElement)
}

module.exports = renderMovies

