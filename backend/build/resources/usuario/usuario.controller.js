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
const usuario_service_1 = require("./usuario.service");
const http_status_codes_1 = require("http-status-codes");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersDb = yield (0, usuario_service_1.listAllUsers)();
    if (usersDb === null)
        return res.status(400).send('Não existem usuários cadastrados');
    return res.status(http_status_codes_1.StatusCodes.ACCEPTED).json(usersDb);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const newUser = yield (0, usuario_service_1.createUsuario)(user);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(newUser);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, usuario_service_1.getUser)(id);
    if (user === null)
        return res.status(404).send('Usuário não encontrado');
    return res.status(http_status_codes_1.StatusCodes.ACCEPTED).json(user);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userRequest = req.body;
    const userDb = yield (0, usuario_service_1.getUser)(id);
    if (!userDb)
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send('Usuário não encontrado');
    const userUpdated = yield (0, usuario_service_1.updateUser)(id, userRequest);
    return res.status(http_status_codes_1.StatusCodes.ACCEPTED).json(userUpdated);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userDb = yield (0, usuario_service_1.getUser)(id);
    if (!userDb)
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send('Usuário não encontrado');
    const userRemoved = yield (0, usuario_service_1.removeUser)(id);
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT);
});
exports.default = { index, create, getUserById, update, remove };
