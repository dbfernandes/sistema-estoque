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
const equipamento_service_1 = require("./equipamento.service");
const http_status_codes_1 = require("http-status-codes");
const isError = (error) => {
    return error.message !== undefined;
};
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipamentos = yield (0, equipamento_service_1.listEquipamentos)();
        res.status(http_status_codes_1.StatusCodes.OK).json(equipamentos);
    }
    catch (err) {
        if (isError(err)) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: err.message });
        }
        else {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: 'Unknown error occurred' });
        }
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipamento = req.body;
    try {
        if (yield (0, equipamento_service_1.EquipamentoAlreadyExists)(equipamento.numSerie)) {
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json({
                message: `${http_status_codes_1.ReasonPhrases.CONFLICT}, já existe equipamento com esse número de série`,
            });
        }
        else {
            const novoEquipamento = yield (0, equipamento_service_1.createEquipamento)(equipamento);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(novoEquipamento);
        }
    }
    catch (err) {
        if (isError(err)) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: err.message });
        }
        else {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: 'Unknown error occurred' });
        }
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const equipamento = yield (0, equipamento_service_1.readEquipamento)(id);
        if (!equipamento) {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
        }
        else {
            res.status(http_status_codes_1.StatusCodes.OK).json(equipamento);
        }
    }
    catch (err) {
        if (isError(err)) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: err.message });
        }
        else {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: 'Unknown error occurred' });
        }
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const equipamento = req.body;
    try {
        if (yield (0, equipamento_service_1.EquipamentoAlreadyExists)(equipamento.nome)) {
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json(http_status_codes_1.ReasonPhrases.CONFLICT);
        }
        else {
            const equipamentoAtualizado = yield (0, equipamento_service_1.updateEquipamento)(id, equipamento);
            res.status(http_status_codes_1.StatusCodes.OK).json(equipamentoAtualizado);
        }
    }
    catch (err) {
        if (isError(err)) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: err.message });
        }
        else {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: 'Unknown error occurred' });
        }
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const equipamentoApagado = yield (0, equipamento_service_1.removeEquipamento)(id);
        res.status(http_status_codes_1.StatusCodes.OK).json(equipamentoApagado);
    }
    catch (err) {
        if (isError(err)) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: err.message });
        }
        else {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ error: 'Unknown error occurred' });
        }
    }
});
exports.default = { index, create, read, update, remove };
