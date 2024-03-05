function getMovies() {
    $.get('https://students-api.2.us-1.fl0.io/movies', function(data) {
        const movieContainer = $('#movieContainer');
        const cards = data.map(movie => {
            const card = $('<div>').addClass('card').html(`
                <img src="${movie.poster}" alt="${movie.title}" class="cardImg">
                <div class="cardContainer">
                    <h5 class="cardTitle">${movie.title} (${movie.year})</h5>
                    <p class="cardText"><strong>Director:</strong> ${movie.director}</p>
                    <p class="card-text"><strong>Duration:</strong> ${movie.duration}</p>
                    <p class="card-text"><strong>Genre:</strong> ${movie.genre}</p>
                    <p class="card-text"><strong>Rate:</strong> ${movie.rate}</p>
                </div>
            `);
            return card;
        });
        movieContainer.empty().append(cards);
    }).fail(function(error) {
        console.error('Error fetching movies:', error);
    });
}

getMovies();
