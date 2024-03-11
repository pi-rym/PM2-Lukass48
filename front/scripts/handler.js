// const renderMovies = require('./getmovies')
const axios = require("axios")

// const getMovie = ()=> {
//     $.get('https://students-api.2.us-1.fl0.io/movies', (data) => data.forEach(renderMovies))
// }

const fetchData = async()=>{
    try {
        const data = await axios.get('https://students-api.2.us-1.fl0.io/movies');
        console.log(data.data)
    } catch (error) {
        throw new Error("No se encontro la API");
        console.log(error)
    }
    
}
fetchData()

//  module.exports = getMovie