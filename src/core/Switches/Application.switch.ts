import { Application } from 'express';
import { Switch } from '../types.core';

export class AppSwitch implements Switch {
  _APP: Application;

  activeServer?: any;
  _PORT: string | number | undefined;
  constructor(props: { application: Application; port: string | number | undefined }) {
    this._APP = props.application;
    this._PORT = props.port;
  }
  async on(): Promise<void | Error> {
    this.activeServer = await this._APP.listen(this._PORT);
  }
  async off(): Promise<void | Error> {
    await this.activeServer.close();
  }
}
