import http from 'http';
// import prisma from './prisma/index.js';
import app from './app';
import dotenv from 'dotenv';

const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT;

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