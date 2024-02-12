const validateData = (validator) => (req, res, next) => {
  const validation = validator(req.body);

  if (validation.error) {
    return res.status(400).json(validation.error);
  }

  // If validation is successful, proceed to the next middleware or route handler
  next();
};

module.exports = validateData;
