export interface MongoSettings {
  user: string | undefined;
  password: string | undefined;
  host: string | undefined;
  baseDb: string | undefined;
  port?: string | undefined;
}
