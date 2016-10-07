
//return customer info
//takes options
//options.getCustomerLocation
module.exports = (options) => {

  const { getCustomerLocation } = options;

  return {
    getCustomerDetails: getCustomerDetailsById(options.getCustomerLocation)
  };

};

//creates customer details object, only requires id and location
//at the moment, can be expanded to incorporate other services & details
function getCustomerDetailsById(getLocation) {
  return (id) => {
    let location = getLocation(id);
    return location ? {
      id: id,
      location: location
    }: {};
  };
};
