import supertest from 'supertest';
import Settings from "../../Config";
import express from 'express';
import CustomServer from "../../server";
import { Server } from "http";

describe('Home Tests', () => {
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
  
  it(`gets information from the ${Settings.URL}`, async () => {
    const response = await request.get(`/${Settings.URL}`);
    expect(response.status).toBe(200);
  });

  it(`should save a new item`, async () => {
    const response = await request.post(`/${Settings.URL}`).send({
      name: 'sam'
    });
    id = response.body._id;
    expect(response.body.name).toEqual('sam');
    expect(response.status).toBe(200);
  });
  
  it(`should delete found object`, async () => {
    const response = await request.delete(`/${Settings.URL}/remove/${id}`);
    expect(response.status).toBe(204);
  });

})
