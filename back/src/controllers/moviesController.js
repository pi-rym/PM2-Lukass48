const getMoviesService = require("../services/getMoviesService");

const getAllMovies = async (req, res) => {
  const movies = await getMoviesService.getAllMovies();
  res.json(movies);
};
module.exports = {
  getAllMovies,
};
