import { config } from 'dotenv';
import path from 'path';
import { ConfigurationManager } from '../core/Utils/ConfigurationManager';

config({
  path: path.join(__dirname, '../../.env'),
});

const Settings = new ConfigurationManager({
  port: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV,
  URL: 'trial',
  database: {
    user: process.env.MongoUserDev,
    password: process.env.MongoPassDev,
    host: process.env.MongoHostDev,
    baseDb: process.env.MongoRootDbDev,
    port: process.env.MongoPortDev, 
  },
  session: null,
});

export default Settings;