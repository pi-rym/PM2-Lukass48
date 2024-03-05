console.log(tempData);

const movieContainer = document.getElementById('movieContainer');

const cards = tempData.map(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="cardImg">
        <div class="cardContainer">
            <h5 class="cardTitle">${movie.title} (${movie.year})</h5>
            <p class="cardText"><strong>Director:</strong> ${movie.director}</p>
            <p class="card-text"><strong>Duration:</strong> ${movie.duration}</p>
            <p class="card-text"><strong>Genre:</strong> ${movie.genre}</p>
            <p class="card-text"><strong>rate:</strong> ${movie.rate}</p>
        </div>
    `;
    return card;
    
})
movieContainer.append(...cards);