import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { version } from '../package.json';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let jwtToken: string;
  let createUserId: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({ version });
  });

  it('/api/v1/auth/login (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({
        name: 'root',
        password: 'root',
      })
      .expect(201);

    jwtToken = response.body.token;
    return expect(jwtToken).toBeDefined();
  });

  it('/api/v1/add-user (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/add-user')
      .send({
        name: 'Jenny',
        email: 'jenny@gmail.com',
        phone: '+380999999999',
      })
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(201);

    createUserId = response.body.id;
    return expect(createUserId).toBeDefined();
  });

  it(`/api/v1/get-user/:id (GET)`, async () => {
    expect(createUserId).toBeDefined();
    const response = await request(app.getHttpServer())
        .get(`/api/v1/get-user/${createUserId}`)
        .set('Authorization', `Bearer ${jwtToken}`)
        .expect(200);

    const userId = response.body.id;
    return expect(userId).toBe(createUserId);
  });

  it(`/api/v1/del-user/:id (DELETE)`, async () => {
    const response = await request(app.getHttpServer())
      .delete(`/api/v1/del-user/${createUserId}`)
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);

    const deleted = response.body.deleted;
    return expect(deleted).toBe(true);
  });
});
