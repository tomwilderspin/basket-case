
//returns product info from service
//takes options
//options.getProducts
module.exports = (options) => {
  const { getProducts } = options;
  return {
    getProducts: getProductsList(getProducts)
  }
}


function getProductsList(getProducts) {
  let products = getProducts();
  return (filters) => {
    //run through product list
    return products.filter((product) => {
      //check if product has matching prop in filters
      return Object.keys(product).reduce((flag, key) => {
        // flag any products that dont match in filters
        return filters[key] ?
          filters[key] == product[key] : true;
      }, true)
    });
  };
}
