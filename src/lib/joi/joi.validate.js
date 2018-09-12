import Joi from 'joi';

const validate = (data, schema) => {
  const { error, value } = Joi.validate(data, schema);
  return { error, value };
};

export { validate };
