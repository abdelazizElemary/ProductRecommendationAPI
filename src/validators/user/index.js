const Joi = require("joi");

const addUserSchema = Joi.object({
  body: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    preferences: Joi.object({
      subCategories: Joi.array().items(Joi.string()).required(),
      brands: Joi.array().items(Joi.string()).required(),
    }),
    purchaseHistory: Joi.array().items(
      Joi.object({
        productId: Joi.number().required(),
        date: Joi.string().required(),
      })
    ).required,
  }),
});

const addUserValidator = (req, res, next) => {
  console.log(req.body);
  const { error } = addUserSchema.validate({ body: req.body });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

const updatedUserSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    preferences: Joi.object({
      subCategories: Joi.array().items(Joi.string()).optional(),
      brands: Joi.array().items(Joi.string()).optional(),
    }).optional(),
    purchaseHistory: Joi.array()
      .items(
        Joi.object({
          productId: Joi.number().optional(),
          date: Joi.string().optional(),
        })
      )
      .optional(),
  }),
});

const updateUserValidator = (req, res, next) => {
  const { error } = updatedUserSchema.validate({ body: req.body });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  addUserValidator,
  updateUserValidator,
};
