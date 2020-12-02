import {
  Application,
  RequestHandler,
  Response,
  Request,
  NextFunction,
} from 'express';

export interface ApplicationSettings {
  port: number | string | undefined;
  NODE_ENV: string | undefined;
  URL: string;

  database: object | unknown | any | null;
  session: object | unknown | any | null;
}

export interface Switch {
  _APP: Application;
  on(): Promise<void | Error> | void;
  off?: Function;
}

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}
export interface RouteObject {
  method: Methods;
  path: string;
  middleware?: Array<RequestHandler>;
  control(
    req: Request,
    res: Response,
    next?: NextFunction,
  ): Promise<void | Error> | void;
}

export interface Module {
  baseURL: string;
  subRoutes: Array<RouteObject>;
}

export interface HubButton {
  name: string;
  state: boolean;

  control: Switch;
}

export class Controller{
  static index?: (req: Request, res: Response, next?:NextFunction) => Promise<void | Error | any> | void;
  static read?: (req: Request, res: Response, next?:NextFunction) => Promise<void | Error | any> | void;
  static create?: (req: Request, res: Response, next?:NextFunction) => Promise<void | Error | any> | void;
  static update?: (req: Request, res: Response, next?:NextFunction) => Promise<void | Error | any> | void;
  static remove?: (req: Request, res: Response, next?:NextFunction) => Promise<void | Error | any> | void;
}

export interface CustomResponse {
  results: null | unknown[];
  length?: number | 0;
  success: boolean;
  status?: number;
  message?: string;
  error?: null | undefined | string | unknown;
  info: RequestInfo;
}