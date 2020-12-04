import { config } from 'dotenv';
import path from 'path';
import { ConfigurationManager } from '../Core/Utils/ConfigurationManager';

config({
  path: path.join(__dirname, '../../.env'),
});

const Settings = new ConfigurationManager({
  port: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV,
  URL: 'trial',
  logs: false,
  database: {
    user: process.env.MongoUserDev,
    password: process.env.MongoPassDev,
    host: process.env.MongoHostDev,
    baseDb: process.env.MongoRootDbDev,
    port: process.env.MongoPortDev, 
  },
  session: {
    secret: 'some secret phrase',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }
});

export default Settings;