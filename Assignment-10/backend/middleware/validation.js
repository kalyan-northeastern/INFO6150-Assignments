const validator = require('validator');

// Validate email format
const validateEmail = (email) => {
  return validator.isEmail(email);
};

// Validate full name (only alphabetic characters and spaces)
const validateFullName = (fullName) => {
  if (!fullName || typeof fullName !== 'string') {
    return false;
  }
  // Allow only alphabetic characters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(fullName.trim());
};

// Validate strong password
// Minimum 8 characters, at least one uppercase, one lowercase, one digit, one special character
const validatePassword = (password) => {
  if (!password || typeof password !== 'string') {
    return false;
  }
  if (password.length < 8) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
};

// Validate user type
const validateUserType = (type) => {
  return type === 'admin' || type === 'employee';
};

// Middleware for user creation validation
const validateUserCreate = (req, res, next) => {
  const { fullName, email, password, type } = req.body;
  const errors = [];

  if (!fullName || !validateFullName(fullName)) {
    errors.push('Full name must contain only alphabetic characters.');
  }

  if (!email || !validateEmail(email)) {
    errors.push('Email must be in a valid format.');
  }

  if (!password || !validatePassword(password)) {
    errors.push('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
  }

  if (!type || !validateUserType(type)) {
    errors.push('Type must be either "admin" or "employee".');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed.', details: errors });
  }

  next();
};

// Middleware for user update validation
const validateUserUpdate = (req, res, next) => {
  const { fullName, password } = req.body;
  const errors = [];

  if (fullName !== undefined && !validateFullName(fullName)) {
    errors.push('Full name must contain only alphabetic characters.');
  }

  if (password !== undefined && !validatePassword(password)) {
    errors.push('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed.', details: errors });
  }

  next();
};

module.exports = {
  validateEmail,
  validateFullName,
  validatePassword,
  validateUserType,
  validateUserCreate,
  validateUserUpdate
};



