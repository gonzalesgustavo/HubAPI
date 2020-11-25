export interface ApplicationSettings {
  port: number | string | undefined;
  NODE_ENV: string | undefined;
  URL: string;

  database: object | unknown | any | null;
  session: object | unknown | any | null;
}