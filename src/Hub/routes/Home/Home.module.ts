import { Methods, Module, RouteObject } from '../../../Core/types.core';
import { HomeController } from './Home.controller';

export class HomeModule implements Module {
  baseURL: string;
  subRoutes: RouteObject[];

  constructor() {
    this.baseURL = '';
    this.subRoutes = [
      {
        path: '',
        method: Methods.GET,
        control: HomeController.index,
      },
      {
        path: '',
        method: Methods.POST,
        control: HomeController.create,
      },
      {
        path: '/remove/:id',
        method: Methods.DELETE,
        control: HomeController.remove,
      },
    ];
  }
}
