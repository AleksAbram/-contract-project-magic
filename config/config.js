const express = require('express');
const path = require('path');

const config = (app) => {
  app.set('view engine', 'hbs');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, 'public')));
};

module.exports = config;
