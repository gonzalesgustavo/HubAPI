import { Application } from 'express';
import { MiddlewareSwitch } from './Core/Switches/Middleware.switch';
import Settings from './Config';
import { RouteSwitch } from './Core/Switches/Routes.switch';
import { ROUTES } from './Hub/registry/route.registry';
import SwitchBoard from './Core/Board/index';
import connection from './Database/Mongoose';
import mongoose, { Mongoose } from 'mongoose';
import logger from './Core/Utils/Winston';
import { APPMIDDLEWARE } from './Hub/registry/app.middleware.registry';
import { SessionSwitch } from './Core/Switches/Session.switch';

connection().then((db) => {
  if (db) {
    logger.info('connection established to mongoose');
  }
});
class CustomServer {
  application: Application;
  routes: RouteSwitch;
  middleware: MiddlewareSwitch;

  session: SessionSwitch;
  switchboard: SwitchBoard;
  databaseConnection?: typeof mongoose;
  constructor(application: Application) {

    this.application = application;
    this.routes = new RouteSwitch({
      application: this.application,
      baseUrl: Settings.URL,
      modules: ROUTES,
    });

    this.middleware = new MiddlewareSwitch({
      application: this.application,
      middleware: APPMIDDLEWARE,
    });

    this.session = new SessionSwitch({
      application: this.application,
      sessionInfo: Settings.session,
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
      {
        name: 'session',
        state: true,
        control: this.session,
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
        state: false,
        control: this.middleware,
      },
      {
        name: 'routes',
        state: false,
        control: this.routes,
      },
      {
        name: 'session',
        state: false,
        control: this.session,
      },
    ]);
  }
}

// export default CustomServer;
