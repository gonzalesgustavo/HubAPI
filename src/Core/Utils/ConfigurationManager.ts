import {ApplicationSettings} from '../types.core';
export class ConfigurationManager implements ApplicationSettings{
  port: string | number | undefined;
  NODE_ENV: string | undefined;
  URL: string;
  database: any | null;
  session: any | null;
  logs: boolean | null;
  constructor(props: ApplicationSettings){
    this.port = props.port;
    this.NODE_ENV = props.NODE_ENV;
    this.URL = props.URL;
    this.database = props.database;
    this.session = props.session;
    this.logs = props.logs;
  }
}