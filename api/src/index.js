import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import controllerADM from './controller/controllerADM.js';
import controllerBooks from './controller/controllerBooks.js'
const server = express();

server.use(cors());
server.use(express.json());

server.use(controllerADM);

server.use(controllerBooks);

server.listen(process.env.PORT, () => {console.log(`API rodando na porta ${process.env.PORT}`)})
