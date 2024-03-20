const renderMovies = require("./getmovies");
const axios = require("axios");

const fetchData = async () => {
  try {
    const {data} = await axios.get("http://localhost:3000/movies");
    data.forEach(renderMovies);
  } catch (error) {
    throw alert("No se encontro la API");
  }
};
fetchData();
