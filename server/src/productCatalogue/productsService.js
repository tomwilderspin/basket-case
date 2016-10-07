
//products service that returns a lit of products

//products stub
//would normally be a query / request to
//external persistance layer
const products = [
  {
    name: 'Arsenal TV',
    category: 'Sports',
    location: 'LONDON'
  },
  {
    name: 'Chelsea TV',
    category: 'Sports',
    location: 'LONDON'
  },
  {
    name: 'Liverpool TV',
    category: 'Sports',
    location: 'LIVERPOOL',
  },
  {
    name: 'Sky News',
    category: 'News'
  },
  {
    name: 'SKy Sports News',
    category: 'News'
  }
];

//returns a product list
module.exports = () => { return products };
