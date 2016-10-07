const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.NODE_PORT;

//add in dependences, as the app expands these can moved into a
//factory or builder.

//services
const productService = require('./productCatalogue/productsService.js');
const locationService = require('./customer/locationService.js');

//actions
const { getCustomerDetails } = require('./customer/customerDetails.js')({
  getCustomerLocation: locationService
});
const { getProducts } = require('./productCatalogue/products.js')({
  getProducts: productService
});

//add cookie & body parser
app.use(cookieParser());
app.use(bodyParser.json());
//setup routes
const router = express.Router();

require('./restApi/routes.js')(router, {
  getCustomerDetails: getCustomerDetails,
  getProducts: getProducts
});

app.use('/', router);

//add static location for web assets
app.use('/public', express.static(__dirname+'/../../public'));

//listen to port defined in vars
app.set('port', process.env.NODE_PORT || 9000);

module.exports = app;
