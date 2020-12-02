import { Methods, Module, RouteObject } from '../../../Core/types.core';
import ManController from './man.controller';

export default class ManModule implements Module {
  baseURL: string;
  subRoutes: RouteObject[];
  constructor(){
    this.baseURL = 'man';
    this.subRoutes = [
      {
        path: '',
        method: Methods.GET,
        control: ManController.index,
      },
    ]
  }
}

// WARNING: all modules must be registered under Registry/module.registry.ts in order to be considered routes. As of Version 1.0
