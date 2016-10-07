
const app = require('../../src/app.js');

const request = require('supertest')(app);

describe('Rest Api calls', () => {

    it('returns customer details for id 123', () =>  {
        request
            .get('/customers/123')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual({id: 123, location: 'LONDON'});
            });
    });

    it('returns customer details for id 456',  () =>  {
        request
            .get('/customers/123')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) =>  {
                expect(res.body).toEqual({id: 456, location: 'LIVEPOOL'});
            });
    });

    it('returns a list of products', () => {
      request
          .get('/products')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(res.body.products.length).toBeGreaterThan(1);
          });
    })

    it('returns a location filtered list of products', () => {
      request
          .get('/products?location=LIVERPOOL')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(res.body.products.length).toEqul(3);
          });
    });

    it('return a 404 satus for unsupported endpoint', () => {
      request
          .get('/someendpoint')
          .expect('Content-Type', /json/)
          .expect(404)
          .end(function (err, res) {
              expect(err).toEqual(null);
          });
    });
});
