const renderMovies = require('./getmovies')

const getMovie = ()=> {
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => data.forEach(renderMovies))
}
module.exports = getMovie