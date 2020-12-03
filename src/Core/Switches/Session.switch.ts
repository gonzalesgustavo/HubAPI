import { Application } from 'express';
import { SessionInfo, Switch } from '../types.core';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import { v4 } from 'uuid';
import { Server } from 'http';
export class SessionSwitch implements Switch {
  _APP: Application;
  private _SessionStore = MongoStore(session);
  private _SessionInfo: SessionInfo;
  constructor(props: { application: Application; sessionInfo: SessionInfo }) {
    this._APP = props.application;
    this._SessionInfo = props.sessionInfo;
  }

  on(): void {
    this._APP.use(
      session({
        secret: this._SessionInfo.secret,
        resave: this._SessionInfo.resave,
        genid: function () {
          return v4();
        },
        saveUninitialized: this._SessionInfo.saveUninitialized,
        store: new this._SessionStore({
          mongooseConnection: mongoose.connection,
        }),
        cookie: this._SessionInfo.cookie,
      }),
    );
  }
}
