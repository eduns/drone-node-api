import Joi from 'joi'

const DroneSchema = Joi.object({
  customer_name: Joi.string().min(5).max(255).messages({
    'string.empty': 'não pode ser vazio',
    'string.min': 'deve ter no mínimo 5 caracteres',
    'string.max': 'deve ter no máximo 255 caracteres'
  }),
  customer_image: Joi.string().min(5).max(255).messages({
    'string.empty': 'não pode ser vazio',
    'string.min': 'deve ter no mínimo 5 caracteres',
    'string.max': 'deve ter no máximo 255 caracteres'
  }),
  customer_address: Joi.string().min(5).max(255).messages({
    'string.empty': 'não pode ser vazio',
    'string.min': 'deve ter no mínimo 5 caracteres',
    'string.max': 'deve ter no máximo 255 caracteres'
  }),
  battery: Joi.number().integer().min(0).max(100).required().messages({
    'number.base': 'deve ser um número válido',
    'number.integer': 'deve ser um número inteiro válido',
    'any.required': 'não pode ser nulo',
    'number.min': 'deve ser maior ou igual a 0',
    'number.max': 'deve ser menor ou igual a 100'
  }),
  max_speed: Joi.number().min(1).max(99).required().messages({
    'number.base': 'deve ser um número válido',
    'any.required': 'não pode ser nulo',
    'number.min': 'deve ser maior ou igual a 1',
    'number.max': 'deve ser no máximo igual a 99'
  }),
  average_speed: Joi.number().min(1).max(99).required().messages({
    'number.base': 'deve ser um número válido',
    'any.required': 'não pode ser nulo',
    'number.min': 'deve ser maior ou igual a 1',
    'number.max': 'deve ser no máximo igual a 99'
  }),
  status: Joi.string().min(2).max(255).required().messages({
    'string.empty': 'não pode ser vazio',
    'any.required': 'não pode ser nulo',
    'string.min': 'deve ter no mínimo 2 caracteres',
    'string.max': 'deve ter no máximo 255 caracteres'
  }),
  current_fly: Joi.number().integer().min(1).required().messages({
    'number.base': 'deve ser um número válido',
    'number.integer': 'deve ser um número inteiro válido',
    'any.required': 'não pode ser nulo',
    'number.min': 'deve ser maior ou igual a 1'
  })
})

export default DroneSchema
