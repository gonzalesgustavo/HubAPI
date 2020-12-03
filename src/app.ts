import express from 'express';
import mongoose from 'mongoose';
import Settings from './Config';
import connection from './Database/Mongoose';
import logger from './Core/Utils/Winston';
import CustomServer from './Core/CustomServer';

export const app =  express();

const newServer = new CustomServer(app);

connection().then((db) => {
  if (db) {
    logger.info('connection established to mongoose');
    newServer.startup();
  }
});



const activeServer = app.listen(Settings.port);

let connections: any = [];

activeServer.on('connection', (connection: { on: (arg0: string, arg1: () => any) => void; }) => {
  connections.push(connection);
  connection.on('close', () => connections = connections.filter((curr: any) => curr !== connection));
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

// -------> Shutdown App
async function shutDown() {
  newServer.taredown();
  connections.forEach((curr: { end: () => any; }) => curr.end());
  connections.forEach((curr: { destroy: () => any; }) => curr.destroy())
  if(mongoose.connection.readyState === 0){
    process.exit(1);
  } else {
    process.exit(0);
  }
}
