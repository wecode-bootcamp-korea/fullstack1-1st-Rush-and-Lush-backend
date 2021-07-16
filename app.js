import express from 'express';
import route from './Categories/router';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes'

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(logger);
app.use(route);

export default app;
