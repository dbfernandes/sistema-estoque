"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const tipoUsuario_constants_1 = require("../tipoUsuario/tipoUsuario.constants");
const schemaUsuario = joi_1.default.object().keys({
    nome: joi_1.default.string().min(3).max(50).required(),
    email: joi_1.default.string().email().required(),
    senha: joi_1.default.string().required(),
    tipoUsuarioId: joi_1.default.valid(tipoUsuario_constants_1.TiposUsuarios.ADMIN, tipoUsuario_constants_1.TiposUsuarios.CLIENT),
});
exports.default = schemaUsuario;
