const express = require('express');
const helmet = require('helmet'); //TL
const createError = require('http-errors'); //TL
const compression = require('compression'); //TL
const cors = require('cors');
const path = require('path');
const http = require('http');
const mongoose = require('./db');

const app = express();
require('dotenv').config();

const indexRoute = require('./router/index');

app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs')

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, '../public')));

mongoose.connect("mongodb://localhost:27017/toDoing", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/', indexRoute);
/*
app.use((req,res,next) =>{
  next(createError(404));
})
 */
const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);
console.clear();
console.log(`-> Listening in port ${process.env.PORT}.`)

module.exports = express;
