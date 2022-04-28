const express = require('express');
const config = require('./config/config');

const mainRoute = require('./route/main.route');
const regRoute = require('./route/reg.route');
const loginRoute = require('./route/login.route');
const logoutRoute = require('./route/logout.route');
const accountRoute = require('./route/account.route');
const cardsRoute = require('./route/cards.route');
const shopRoute = require('./route/shop.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRoute);
app.use('/', regRoute);
app.use('/', loginRoute);
app.use('/', logoutRoute);
app.use('/', accountRoute);
app.use('/', cardsRoute);
app.use('/', shopRoute);

app.listen(PORT, () => console.log(`*** Server started at ${PORT} port ***`));
