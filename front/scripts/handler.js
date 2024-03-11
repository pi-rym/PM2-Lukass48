const renderMovies = require('./getmovies')
const axios = require("axios")

// const getMovie = ()=> {
//     $.get('https://students-api.2.us-1.fl0.io/movies', (data) => data.forEach(renderMovies))
// }

const fetchData = async()=>{
    try {
        const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');
        const data = response.data.forEach(renderMovies)
    } catch (error) {
        throw alert("No se encontro la API");
    }
    
}
fetchData()

// module.exports = getMovie