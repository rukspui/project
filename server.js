var express = require('express');
var babelify = require('babelify');
var browserify = require('browserify-middleware');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var dbConfig = require('./server/config/db');
var config = require('./client/config');

// initialise express
var app = express();

//We speak JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Configure passport
require('./server/config/passport')(app);

//DB connection
mongoose.connect(dbConfig.url, function (err) {
  if (err) {
    console.error(err);
  }
  console.log('Connected to DB.')
});

// use nunjucks to process view templates in express
nunjucks.configure('server/templates/views', {
  express: app
});

// public assets are served before any dynamic requests
app.use(express.static('public'));

// common packages are precompiled on server start and cached
app.get('/js/' + config.common.bundle, browserify(config.common.packages, {
  cache: true,
  precompile: true
}));

// any file in /client/scripts will automatically be browserified,
// excluding common packages.
app.use('/js', browserify('./client/scripts', {
  external: config.common.packages,
  transform: [babelify.configure({
    plugins: ['object-assign']
  })]
}));

/*
 set up any additional server routes (api endpoints, static pages, etc.)
 here before the catch-all route for index.html below.
 */
//Users API
require('./server/routes/index')(app);

// start the server
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('\nServer ready on port %d\n', server.address().port);
});
