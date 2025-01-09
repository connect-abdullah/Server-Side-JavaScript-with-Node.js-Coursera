var category = function category(key) {
  const categories = {
    PL: "Personal Loan",
    VL: "Vehicle Loan",
    HL: "Home Loan",
    EL: "Education Loan",
  };

  return categories[key.toUpperCase()] || null; // Return value for the key or null if key doesn't exist
};

module.exports = {
  category: category,
};
