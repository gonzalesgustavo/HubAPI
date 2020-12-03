import { Application } from 'express';
import Settings from '../Config';
import { APPMIDDLEWARE } from '../Hub/registry/app.middleware.registry';
import { ROUTES } from '../Hub/registry/route.registry';
import { BUTTONS } from '../SwitchBoard';
import SwitchBoard from './Board';
import { MiddlewareSwitch } from './Switches/Middleware.switch';
import { RouteSwitch } from './Switches/Routes.switch';
import { SessionSwitch } from './Switches/Session.switch';
import { StaticSwitch } from './Switches/Static.switch';
import { HubButton } from './types.core';

export default class CustomServer {
  application: Application;
  routes: RouteSwitch;
  middleware: MiddlewareSwitch;
  static: StaticSwitch;
  availableControls: HubButton[];
  session: SessionSwitch;
  switchboard: SwitchBoard;
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

    this.static = new StaticSwitch({
      application: this.application,
    });

    this.availableControls = [
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
        name: 'static',
        state: true,
        control: this.static,
      },
      {
        name: 'session',
        state: true,
        control: this.session,
      },
    ];

    BUTTONS.forEach((button, idx) => {
      if(this.availableControls[idx].name && button.name === this.availableControls[idx].name){
        this.availableControls[idx].state = button.state;
      }
    });

    this.switchboard = new SwitchBoard(this.availableControls);
  }
  async startup() {
    await this.switchboard.start();
  }
  async taredown() {
    await this.switchboard.stop(this.availableControls.map( control => {
      control.state = false;
      return control;
    }));
  }
}
