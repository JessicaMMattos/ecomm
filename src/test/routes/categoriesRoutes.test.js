import request from 'supertest';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /categories', () => {
  it('Deve retornar uma lista de Categorias', async () => {
    await request(app)
      .get('/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;

describe('POST em /admin/categories', () => {
  it('Deve adicionar uma nova Categoria', async () => {
    const resposta = await request(app)
      .post('/admin/categories')
      .send({
        nome: "VESTUARIO",
        status: "ATIVA",
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    idResposta = resposta.body._id;
  });
  it('Não adiciona nada ao passar o body vazio', async () => {
    await request(app)
      .post('/admin/categories')
      .send({})
      .expect(500);
  });
});

describe('GET em /categories/:id', () => {
  it('Deve retornar o detalhamento da categoria pelo ID', async () => {
    await request(app)
      .get(`/categories/${idResposta}`)
      .expect(200);
  });
});
