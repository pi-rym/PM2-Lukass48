const express = require('express');
const router = require('./routes/route')

const app = express();

app.use(router)

module.exports = app;