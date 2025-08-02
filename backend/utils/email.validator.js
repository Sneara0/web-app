

const validateEmail = (email) => {
  // Regular expression to check basic email format
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

module.exports = validateEmail;
