const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const movieRouter = Router();

movieRouter.get("/", moviesController);

module.exports = movieRouter;
