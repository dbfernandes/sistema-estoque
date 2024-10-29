"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schemaProjeto = joi_1.default.object({
    nome: joi_1.default.string().min(3).max(50).required(),
    descricao: joi_1.default.string().min(3).max(200).required(),
    responsavel: joi_1.default.string().min(10).max(40).required(),
});
exports.default = schemaProjeto;
