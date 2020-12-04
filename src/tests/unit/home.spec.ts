import supertest from 'supertest';
import Settings from "../../Config";
import express from 'express';
import { Server } from "http";
import mongoose from 'mongoose';
import CustomServer from '../../Core/CustomServer';
import connection from '../../Database/Mongoose';

describe('Home Tests', () => {
  let request: supertest.SuperTest<supertest.Test>;
  let app: express.Application;
  let runningServer: Server;
  let customServer: CustomServer;
  beforeAll(async () => {
    app = express();
    runningServer = app.listen(3020);
    await connection();
    customServer = new CustomServer(app);
    customServer.startup();
  });
  
  beforeEach(() => {
    request = supertest(app);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
    await customServer.taredown();
    runningServer.close()
  })
  
  it(`gets information from the ${Settings.URL}`, async () => {
    const response = await request.get(`/${Settings.URL}`);
    expect(response.status).toBe(200);
  });
})
