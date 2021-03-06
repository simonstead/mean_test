var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
function error404(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}
app.error404 = error404;
app.use(error404);

// error handlers

// development error handler
// will print stacktrace
function devErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
};
app.devErrorHandler = devErrorHandler;
app.use(devErrorHandler);

// production error handler
// no stacktraces leaked to user
function prodErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}
app.prodErrorHandler = prodErrorHandler;
app.use(prodErrorHandler);

//if (app.get('env') === 'development') {
// app.use(devErrorHandler);
// } else {
//   app.use(prodErrorHandler);
// }



module.exports = app;
