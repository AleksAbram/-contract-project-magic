const express = require('express');
const config = require('./config/config');
const mainRoute = require('./route/main.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRoute);

app.listen(PORT, () => console.log(`*** Server started at ${PORT} port ***`));
