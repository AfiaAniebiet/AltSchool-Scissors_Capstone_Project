// importing express package
import express from 'express';
import 'express-async-errors';
import db from './db/database';

// creating app from express function
const app = express();

// importing custom modules
import shortIDRoute from './routes/shortUrl.route';

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(shortIDRoute);

// executing database
db();

export default app;
