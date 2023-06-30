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

describe('GET em /products', () => {
  it('Deve retornar uma lista de Produtos', async () => {
    await request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResposta;

describe('POST em /admin/products', () => {
  it('Deve adicionar um novo Produto', async () => {
    const resposta = await request(app)
      .post('/admin/products')
      .send({
        nome: "TESTE",
        descricao: "LG Book Core i5-1135G7, 8G, 1T SSD, Iris Xe",
        slug: "notebook-samsung",
        preco: "3000.00",
        estoque: 10,
        categoria: "6492f83880306e9922c7fed5"
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    idResposta = resposta.body._id;
  });
  it('Não adiciona nada ao passar o body vazio', async () => {
    await request(app)
      .post('/admin/products')
      .send({})
      .expect(500);
  });
});

describe('GET em /products/:id', () => {
  it('Deve retornar o detalhamento do Produto pelo ID', async () => {
    await request(app)
      .get(`/products/${idResposta}`)
      .expect(200);
  });
});

describe('PUT em /admin/products/:id', () => {
  
  it.each([
    ['nome', { nome: 'TESTECELULAR' }],
    ['descricao', { descricao: 'Celular LG'}],
    ['slug', { slug: 'LG'}],
    ['preco', { preco: '2000'}],
    ['estoque', { estoque: 5}],
    ['categoria', { categoria: '6492f83880306e9922c7fed1'}]
  ])('Deve alterar o campo %s', async (chave, param) => {

    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');

    await requisicao.request(app)
      .put(`/admin/products/${idResposta}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE em /admin/products/:id', () => {
  it('Deletar categoria selecionada', async () => {
    await request(app)
      .delete(`/admin/products/${idResposta}`)
      .expect(200);
  });
});
