import { Application } from 'express';
import { Server } from 'http';
import { Switch } from '../types.core';

export class MiddlewareSwitch implements Switch {
  _APP: Application;

  _Middleware: Array<any>;

  constructor(props: { application: Application; middleware: Array<any> }) {
    this._APP = props.application;
    this._Middleware = props.middleware;
  }
  on(): void | Promise<void | Error> {
    this._Middleware.forEach((middleware) => {
      this._APP.use(middleware);
    });
  }
}
