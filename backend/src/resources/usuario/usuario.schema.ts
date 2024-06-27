import Joi from 'joi';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

const schemaUsuario = Joi.object().keys({
  nome: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
  tipoUsuarioId: Joi.valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT),
});

export default schemaUsuario;
