const request = require('supertest');
const { expect } = require('chai');
const app = require('../servidor10'); // Importa tu servidor

describe('Servidor Express', () => {

  // Prueba para la ruta /inicio
  it('GET /inicio debería devolver el archivo menu.html', (done) => {
    request(app)
      .get('/inicio')
      .expect(200) // Espera un estado 200 OK
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<!DOCTYPE html>'); // Verifica que el archivo HTML tenga la estructura esperada
        done();
      });
  });

  // Prueba para la ruta /accesorios
  it('GET /accesorios debería devolver el archivo accesorios.html', (done) => {
    request(app)
      .get('/accesorios')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<!DOCTYPE html>');
        done();
      });
  });

  // Prueba para la ruta /clientes
  it('GET /clientes debería devolver el archivo clientes.html', (done) => {
    request(app)
      .get('/clientes')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<!DOCTYPE html>');
        done();
      });
  });

  // Prueba para la ruta /prueba
  it('GET /prueba debería devolver un mensaje en HTML', (done) => {
    request(app)
      .get('/prueba')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('Hola Bienvenidos CodeExplorers desde Express');
        done();
      });
  });

  // Prueba para la ruta /api/personajes
  it('GET /api/personajes debería devolver una lista de personajes en formato JSON', (done) => {
    request(app)
      .get('/api/personajes')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const personajes = res.body;
        expect(personajes).to.be.an('array');
        expect(personajes).to.have.lengthOf(2);
        expect(personajes[0]).to.have.property('nombre', 'logan');
        done();
      });
  });

  // Prueba para la ruta /mensaje
  it('GET /mensaje debería devolver un mensaje HTML con estilo', (done) => {
    request(app)
      .get('/mensaje')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('Hola CodeExplorers desde ruta mensaje');
        done();
      });
  });

});
