import { Application } from "express";
import { Module, RouteObject, Switch } from "../types.core";

export class RouteSwitch implements Switch{
  _APP: Application;
  modules: Array<Module>;
  baseURL: string;
  constructor(props: {
    application: Application,
    modules: Module[],
    baseUrl: string,
  }){
    this._APP = props.application;
    this.modules = props.modules;
    this.baseURL = props.baseUrl;
  }

  on(): void {
    this.modules.forEach((module: Module) => {
      module.subRoutes.forEach((route: RouteObject) => {
        let url = `/${this.baseURL}/${module.baseURL}/${route.path}`;
        if((url.match(/\/\//g) || []).length > 0) {
          url = url.replace('//', '');
        }

        if (route.middleware && route.middleware.length > 0) {
          this._APP[route.method](
            url,
            route.middleware,
            route.control
          );
        }
        
        this._APP[route.method](
          url,
          route.control
        );
      });
    });
  }
}