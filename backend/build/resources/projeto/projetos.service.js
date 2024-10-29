"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projetoAlreadyExist = exports.removeProjeto = exports.getProjetoById = exports.listProjeto = exports.createProjeto = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProjeto = (projetoInput) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.projeto.create({ data: projetoInput });
});
exports.createProjeto = createProjeto;
const listProjeto = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.projeto.findMany();
});
exports.listProjeto = listProjeto;
const getProjetoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.projeto.findUnique({
        where: { id }
    });
});
exports.getProjetoById = getProjetoById;
const removeProjeto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.projeto.delete({ where: { id } });
});
exports.removeProjeto = removeProjeto;
const projetoAlreadyExist = (nome) => __awaiter(void 0, void 0, void 0, function* () {
    const existe = yield prisma.projeto.count({ where: { nome } });
    if (existe > 0)
        return true;
    return false;
});
exports.projetoAlreadyExist = projetoAlreadyExist;
