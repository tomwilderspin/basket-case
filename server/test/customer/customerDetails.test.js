
const customerDetails = require('../../src/customer/customerDetails.js');

const mock = jest.fn();

describe('customer details', () => {

  const mockCustomerLocation = jest.fn()
  .mockReturnValueOnce('somelocation')
  .mockReturnValueOnce('somelocation')
  .mockReturnValueOnce(null);


  const options = {
    getCustomerLocation: mockCustomerLocation
  }

  it('uses customer id to fetch from locations service', () => {

    const customerId = 111;

    const customerDetailsCalls = customerDetails(options);

    customerDetailsCalls.getCustomerDetails(customerId);

    expect(mockCustomerLocation.mock.calls[0][0]).toBe(customerId);

  });

  it('gets customer details using customer id', () => {

    const expected = {id:123, location:'somelocation'};

    const customerDetailsCalls = customerDetails(options);

    expect(customerDetailsCalls.getCustomerDetails(123))
    .toEqual(expected);

  });

  it('returns empty customer details for invalid customer id', () => {

    const expected = {};

    const customerDetailsCalls = customerDetails(options);

    expect(customerDetailsCalls.getCustomerDetails(123))
    .toEqual(expected);

  });

});
