const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      return [];
    }
  },

  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
