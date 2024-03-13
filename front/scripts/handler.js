const renderMovies = require("./getmovies");
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const data = response.data.forEach(renderMovies);
  } catch (error) {
    throw alert("No se encontro la API");
  }
};
fetchData();
