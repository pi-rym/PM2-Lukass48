// const MoviesService = require("../services/getMoviesService");
// const moviesController = async(req, res) =>{
//   try {
//     const response = await MoviesService.getAllMovies();
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).sed(error.message)
//   }
  
// }

// module.exports = {
//   moviesController,
// };

// const getMoviesService = require("../services/getMoviesService");

// const moviesController = async (req, res) => {
//   try {
//     const response = await getMoviesService.getAllMovies();
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// module.exports = {
//   moviesController,
// };

const getMoviesService = require("../services/getMoviesService");

const moviesController = async (req, res) => {
  try {
    const response = await getMoviesService.getAllMovies();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = moviesController;
