import Joi from "joi";

const itemSchema = Joi.object({
  productId: Joi.number().min(1).required(),
  price: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

export const orderSchema = Joi.object({
  items: Joi.array().items(itemSchema).min(1).required(),
});

export const orderUpdateSchema = Joi.object({
  status: Joi.string().required(),
});
