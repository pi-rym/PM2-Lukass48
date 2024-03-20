function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (!title || !year || !director || !duration || !rate || !poster || !genre)
    return "Por favor complete todos los campos del formulario.";
  if (isNaN(year) || year < 1896 || year > 2024)
    return "El año ingresado debe ser un año entre 1896 y 2024";
}

function createMovie(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const newMovie = { title, year, director, duration, rate, genre, poster };

  const error = validateForm(newMovie);
  if (error) return alert(error);

  console.log(newMovie);
  axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => alert("Pelicula creada"))
    .catch((error) => alert("error pelicula"));
}

const form = document.getElementById("formulario-pelicula");
form.addEventListener("submit", createMovie);

const btnlimpiar = document
  .getElementById("btn-limpiar")
  .addEventListener("click", function () {
    document.getElementById("formulario-pelicula").reset();
  });
