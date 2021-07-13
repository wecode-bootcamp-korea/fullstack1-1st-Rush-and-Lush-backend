import express from 'express';
import cors from 'cors';
import route from './Users/Router';
import morgan from 'morgan';

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(route);

export default app;
