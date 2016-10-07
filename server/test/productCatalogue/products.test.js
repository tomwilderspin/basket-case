
const products = require('../../src/productCatalogue/products.js');


describe('products ', () => {

  const mockOptions = {
    getProducts: () => {return [
      {name: 'somename', location:'somelocation'},
      {name: 'somename2', location:'somelocation2'},
      {name: 'somename3'}
    ]}
  };

  const productService = products(mockOptions);

  it('returns a location fitered list of products', () => {

    const expected = [
      {name: 'somename', location:'somelocation'},
      {name: 'somename3'}
    ];

    expect(productService.getProducts({location:'somelocation'}))
    .toEqual(expected);
  });

  it('returns whole list if no filters', () => {
    const expected = mockOptions.getProducts();

    expect(productService.getProducts({})).toEqual(expected);

  });

  it('returns whole list if no matching filter', () => {
    const expected = mockOptions.getProducts();

    expect(productService.getProducts({someFilter: '12345'}))
    .toEqual(expected);
  });

});
