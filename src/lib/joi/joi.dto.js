import Joi from 'joi';
import objectid from 'joi-objectid';

Joi.objectId = objectid(Joi);

const Schema = data => {
  return Joi.object().keys(data);
};

const String = ({ max, min, alpNum, required }) => {
  let temp = Joi.string();
  if (alpNum) temp.alphanum();
  if (max) temp.max(max);
  if (min) temp.min(min);
  if (required) temp.required();
  return temp;
};

const Number = ({ max, min, int, required }) => {
  let temp = Joi.number();
  if (int) temp.integer();
  if (max) temp.max(max);
  if (min) temp.min(min);
  if (required) temp.required();
  return temp;
};

const Email = ({ required }) => {
  let temp = Joi.string().email();
  if (required) temp.required();
  return temp;
};

const ObjectId = ({ required }) => {
  let temp = Joi.objectId();
  if (required) temp.required();
  return temp;
};

export { Schema, String, Number, Email, ObjectId };
