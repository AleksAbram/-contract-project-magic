const express = require('express');
const config = require('./config/config');


const mainRoute = require('./route/main.route');
const regRoute = require('./route/reg.route');
const loginRoute = require('./route/login.route');
const logoutRouter = require('./route/logout.router');
const shopRoute = require('./route/shop.router')

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRoute);
app.use('/', regRoute);
app.use('/', loginRoute);
app.use('/', logoutRouter);
app.use('/', shopRoute);

app.listen(PORT, () => console.log(`*** Server started at ${PORT} port ***`));
