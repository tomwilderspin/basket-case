
//stub for location service
//would normally link to a dataService
//via an async fetch call (promise)

const customerLocations = {
  123: 'LONDON',
  456: 'LIVERPOOL'
};

module.exports = (customerId) => {
    return customerLocations[customerId];
};
