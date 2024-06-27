import Joi from 'joi';

const languageSchema = Joi.object().keys({
  lang: Joi.valid('pt-BR', 'en-US'),
});

export default languageSchema;
