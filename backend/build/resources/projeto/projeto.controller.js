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
const http_status_codes_1 = require("http-status-codes");
const projetos_service_1 = require("./projetos.service");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projetos = yield (0, projetos_service_1.listProjeto)();
    if (projetos === null)
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Não existem projetos cadastrados");
    res.status(http_status_codes_1.StatusCodes.ACCEPTED).json(projetos);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projeto = req.body;
    if (yield (0, projetos_service_1.projetoAlreadyExist)(projeto.nome))
        res.status(http_status_codes_1.StatusCodes.CONFLICT).send("Projeto já cadastrado na base de dados");
    const novoProjeto = yield (0, projetos_service_1.createProjeto)(projeto);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projeto = yield (0, projetos_service_1.getProjetoById)(id);
    if (projeto === null)
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    res.status(http_status_codes_1.StatusCodes.ACCEPTED).json(projeto);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projeto = yield (0, projetos_service_1.getProjetoById)(id);
    if (projeto === null)
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    yield (0, projetos_service_1.removeProjeto)(id);
    res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
});
exports.default = { create, remove, getById, list };
