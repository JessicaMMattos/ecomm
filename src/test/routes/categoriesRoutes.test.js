import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
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

describe('PUT em /admin/categories/:id', () => {
  
  it.each([
    ['nome', { nome: 'VESTUARIO' }],
    ['status', { status: 'INATIVA' }]

  ])('Deve alterar o campo %s', async (chave, param) => {

    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');

    await requisicao.request(app)
      .put(`/admin/categories/${idResposta}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

describe('PATCH em /admin/categories/:id', () => {
  it('Deve ativar a categoria pelo ID', async () => {
    await request(app)
      .patch(`/admin/categories/${idResposta}`)
      .expect(200);
  });
});

describe('DELETE em /admin/categories/:id', () => {
  it('Deletar categoria selecionada', async () => {
    await request(app)
      .delete(`/admin/categories/${idResposta}`)
      .expect(200);
  });
});
