const Joi = require("joi");

const addProductSchema = Joi.object({
  body: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    category: Joi.string().required(),
    subCategory: Joi.string().required(),
    brand: Joi.string().required(),
  }),
});

const addProductValidator = (req, res, next) => {
  console.log(req.body);
  const { error } = addProductSchema.validate({ body: req.body });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

const updatedProductSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().optional(),
    category: Joi.string().optional(),
    subCategory: Joi.string().optional(),
    brand: Joi.string().optional(),
  }),
});

const updateProductValidator = (req, res, next) => {
  const { error } = updatedProductSchema.validate({ body: req.body });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  addProductValidator,
  updateProductValidator,
};
