import Settings from "../Config";
import { MongoSettings } from "../custom.types";
import mongoose from 'mongoose';

const connection = async () => {
  const {
    user,
    password,
    host,
    baseDb,
    port,
  } = Settings.database as MongoSettings;
  const URI = `mongodb://${user}:${password}@${host}:${port}/${baseDb}?authSource=admin`;

  return await mongoose.connect(
    URI,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  );
};

export default connection;