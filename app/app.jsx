/*
 * React Boilerplate 3
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// load Foundation (using style and css loaders)
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
