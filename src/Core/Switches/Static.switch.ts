import { Application } from 'express';
import { Switch } from '../types.core';
import express from 'express';
import path from 'path';

export class StaticSwitch implements Switch {
  _APP: Application;
  constructor(props: { application: Application }) {
    this._APP = props.application;
  }

  on(): void {
    this._APP.use(
      '/public',
      express.static(path.join(__dirname, '../../../public'))
    );
  }
}