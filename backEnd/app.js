const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { connectToDatabase } = require('./database/database-connection');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


//error handler 
const notFoundError = require("./middlewares/notFoundError");
const globalError = require("./middlewares/globalErrorHandler");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// database connection
connectToDatabase();


app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.all("*", notFoundError);

// global error handler
app.use(globalError);

module.exports = app;
