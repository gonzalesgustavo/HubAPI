import { Application } from 'express';
import { Switch } from '../types.core';

export class AppSwitch implements Switch {
  _APP: Application;
  private _connections: Array<any>;

  activeServer?: any;
  _PORT: string | number | undefined;
  constructor(props: { application: Application; port: string | number | undefined }) {
    this._APP = props.application;
    this._PORT = props.port;
    this._connections = [];
  }
  async on(): Promise<void | Error> {
    this.activeServer = await this._APP.listen(this._PORT);
    this.activeServer.on('connection', (connection: { on: (arg0: string, arg1: () => any) => void; }) => {
      this._connections.push(connection);
      connection.on('close', () => this._connections = this._connections.filter((curr: any) => curr !== connection));
    });
  }
  async off(): Promise<void | Error> {
    await this.activeServer.close();
    this._connections.forEach(curr => curr.end());
    this._connections.forEach(curr => curr.destroy())
  }
}
