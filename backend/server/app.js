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
import indexRoute from "../router/index.js";

const app = express();
const dotEnv = dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../../public');
const viewPath = path.join(__dirname, '../../views');


app.engine('html', ejs.renderFile)
app.set('views', viewPath);
app.set('view engine', 'ejs')

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(publicPath));

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
