import { Application } from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { MiddlewareSwitch } from './core/Switches/Middleware.switch';
import Settings from './Config';
import { RouteSwitch } from './core/Switches/Routes.switch';
import { ROUTES } from './Hub/registry/route.registry';
import SwitchBoard from './core/SwitchBoard/index';
import connection from './Database/Mongoose';
import mongoose from 'mongoose';

class CustomServer {
  application: Application;
  routes: RouteSwitch;
  middleware: MiddlewareSwitch;
  switchboard: SwitchBoard;
  databaseConnection: any;
  constructor(application: Application) {
    connection().then((db) => {
      if (db) {
        this.databaseConnection = db;
        console.log('connection established to mongoose');
      }
    });
    this.application = application;
    this.routes = new RouteSwitch({
      application: this.application,
      baseUrl: Settings.URL,
      modules: ROUTES,
    });


    this.middleware = new MiddlewareSwitch({
      application: this.application,
      middleware: [cors(), json(), urlencoded({ extended: false })],
    });

    this.switchboard = new SwitchBoard([
      {
        name: 'middleware',
        state: true,
        control: this.middleware,
      },
      {
        name: 'routes',
        state: true,
        control: this.routes,
      },
    ]);
  }
  async startup() {
    await this.switchboard.start();
  }
  async taredown() {
    await this.switchboard.stop([
      {
        name: 'middleware',
        state: true,
        control: this.middleware,
      },
      {
        name: 'routes',
        state: true,
        control: this.routes,
      },
    ]);
    await mongoose.disconnect();
    await mongoose.connection.close();
  }
  get connections(): any {
    return this.databaseConnection;
  }
}


export default CustomServer;
