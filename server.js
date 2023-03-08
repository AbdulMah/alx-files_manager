import express from 'express';
import startServer from './loader/server_loader';
import routes from './routes';
import { middlewaresLoader, envLoader, } from './loader/server_loader';

const server = express();
middlewaresLoader(server);
routes(server);
startServer(server);

export default server;
