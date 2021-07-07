import http from 'http';
// import prisma from './prisma/index.js';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(app);
const { PORT } = process.env;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error(err);
  } 
  // finally {
  //   await prisma.$disconnect();
  // }
};

start();