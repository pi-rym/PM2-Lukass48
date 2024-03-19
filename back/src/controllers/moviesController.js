
const getMoviesService = require("../services/getMoviesService");


module.exports = {
  getMovies : async (req, res)=>{
    const movies = await getMoviesService.getAllMovies();
    res.status(200).json(movies);
  },

  createMovie : async(req, res)=>{
        const{title, year, poster, director, genre, rate, duration} = req.body;
        const newMovie = await getMoviesService.createMovie({title, year, poster, director, genre, rate, duration});
        res.status(201).json(newMovie)
}
}