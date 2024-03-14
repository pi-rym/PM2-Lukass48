const axios = require("axios");

module.exports = {
  getAllMovies : async () => {
    try {
      const movies = await axios("https://students-api.up.railway.app/movies");
      return movies.data;
    } catch (error) {
      return [];
    }
  },
};
