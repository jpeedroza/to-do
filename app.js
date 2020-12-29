const express = require('express');
const helmet = require('helmet'); //TL
const createError = require('http-errors'); //TL
const compression = require('compression'); //TL
const logConsole = require('morgan');
const dotEnv = require('dotenv');
const path = require('path');
const http = require('http');

const result = dotEnv.config();
const app = express();

const indexRoute = require('./router/index');

app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(logConsole('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);

app.use((req,res,next) =>{
  next(createError(404));
})

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);
console.clear();
console.log(`-> Listening in port ${process.env.PORT}.`)

module.exports = app;
