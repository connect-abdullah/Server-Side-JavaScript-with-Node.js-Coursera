// NewCustomer.js
var customerList = [];

// Function to add a customer
const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
  // Check for duplicate CustomerId
  const existingCustomer = customerList.find((customer) => customer[0] === CustomerId);
  if (existingCustomer) {
    return customerList.length; // Do not add duplicate and return the current customer count
  }

  // Add new customer
  const newCustomer = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category];
  customerList.push(newCustomer);

  return customerList.length; // Return the total number of customers
};

// Function to update customer details
const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
  const customerIndex = customerList.findIndex((customer) => customer[0] === CustomerId);

  if (customerIndex !== -1) {
    // Update fields only if new values are provided
    if (CustomerName) customerList[customerIndex][1] = CustomerName;
    if (CustomerAge) customerList[customerIndex][2] = CustomerAge;
    if (CustomerAddress) customerList[customerIndex][3] = CustomerAddress;
    if (CustomerContactNumber) customerList[customerIndex][4] = CustomerContactNumber;
    if (Category) customerList[customerIndex][5] = Category;
    console.log(`Customer updated: ${customerList[customerIndex]}`);
  }
};

// Function to retrieve all customers
const getAllCustomers = () => {
  return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };
