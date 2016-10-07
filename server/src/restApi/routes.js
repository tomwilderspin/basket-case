

//routes for serivce resources
/* takes
router, [express router]
options.getCustomerDetails,
options.getProducts
*/
module.exports = (router, options) => {

  //use middleware set cookie on response for index page
  router.route('/').get((req, res) => {
    let cookie = req.cookies.customerID;
    if (cookie === undefined) {
      // customer id not present so add a stub one
      res.cookie('customerID', 123, { maxAge: 900000, httpOnly: true });
    }
    res.sendFile('index.html', {root: __dirname+'/../../../public'});
  });

  //customer routes
  router.route('/customers/:id').get((req, res) => {
    //handle get request for customer details
    const { id } = req.params;
    const customerDetails = options.getCustomerDetails(id);
    const statusCode = Object.keys(customerDetails).length ?
      200 : 404;
    res.status(statusCode).send(customerDetails);
  });

  //product routes returns all products and takes a filter
  router.route('/products').get((req, res) => {

    const products =  options.getProducts(req.query);

    const statusCode = Object.keys(products).length ?
      200: 404;
    res.status(statusCode).send({products: products});
  });

  //stub for checkout confirmation
  router.route('/checkout').post((req, res) => {

    const { customerId, basket } = req.body | null;

    const statusCode = basket.length ?
      200: 400;
    res.status(statusCode).send(req.body);
  });
};
