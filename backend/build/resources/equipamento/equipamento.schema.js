"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
var StatusEquipamento;
(function (StatusEquipamento) {
    StatusEquipamento["Laboratorio"] = "Laboratorio";
    StatusEquipamento["Manutencao"] = "Manutencao";
    StatusEquipamento["Emprestado"] = "Emprestado";
    StatusEquipamento["Reservado"] = "Reservado";
})(StatusEquipamento || (StatusEquipamento = {}));
const schemaEquipamento = joi_1.default.object({
    nome: joi_1.default.string().min(3).max(50).required(),
    origem: joi_1.default.string().min(3).max(50).required(),
    numSerie: joi_1.default.string().min(3).max(50).required(),
    statusEquip: joi_1.default.string()
        .valid(...Object.values(StatusEquipamento))
        .required(),
    descricao: joi_1.default.string(),
    observacoes: joi_1.default.string().allow(''),
});
exports.default = schemaEquipamento;
