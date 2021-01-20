import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import http from "http";
import mongoose from "./db.js";
import dotenv from "dotenv";
import ejs from "ejs"

const app = express();
const dotEnv = dotenv.config();

import indexRoute from "../router/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'ejs')

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(path.join(__dirname, '../../public')));

mongoose.connect("mongodb://localhost:27017/toDoing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use('/', indexRoute);


const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT);
console.clear();
console.log(`-> Listening in port ${process.env.PORT}.`)

export default express
