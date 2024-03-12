const { Router } = require("express")
const moviesController = require("../controllers/moviesController")
const movieRouter = Router()

movieRouter.get("/", moviesController.getaAllMovies)

module.exports = movieRouter;