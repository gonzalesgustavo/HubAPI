import supertest from 'supertest';
import Settings from "../../Config";
import express from 'express';
import CustomServer from "../../server";
import { Server } from "http";

describe('Man Tests', () => {
  let request: supertest.SuperTest<supertest.Test>;
  let app: express.Application;
  let runningServer: Server;
  let customServer: CustomServer;
  let id: string;
  beforeAll(() => {
    app = express();
    runningServer = app.listen(3020);
    customServer = new CustomServer(app);
    customServer.startup();
  });
  
  beforeEach(() => {
    request = supertest(app);
  });

  afterAll(async () => {
    await customServer.taredown();
    runningServer.close()
    customServer.connections().close()
  })
  it(`should `, async () => {
    const response = await request.get(`/${Settings.URL}/man`);
    expect(response.status).toBe(200);
  });

})
