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
const usuario_service_1 = require("../usuario/usuario.service");
const tipoUsuario_constants_1 = require("../tipoUsuario/tipoUsuario.constants");
const http_status_codes_1 = require("http-status-codes");
const auth_service_1 = require("./auth.service");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        const novoUsuario = yield (0, usuario_service_1.createUsuario)(Object.assign(Object.assign({}, usuario), { tipoUsuarioId: tipoUsuario_constants_1.TiposUsuarios.CLIENT }));
        res.status(http_status_codes_1.StatusCodes.CREATED).json(novoUsuario);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = req.body;
    try {
        const usuario = yield (0, auth_service_1.checkCredentials)(credentials.email, credentials.senha);
        if (!usuario)
            return res
                .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
                .json(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
        req.session.uid = usuario.id;
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(http_status_codes_1.StatusCodes.OK).json({ nome: usuario.nome, tipoUsuario: usuario.tipoUsuarioId === tipoUsuario_constants_1.TiposUsuarios.CLIENT ? "client" : "admin" });
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.session.uid)
        return res
            .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
            .json(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
    req.session.destroy((err) => {
        if (err)
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        res.status(http_status_codes_1.StatusCodes.OK).json(http_status_codes_1.ReasonPhrases.OK);
    });
});
exports.default = { signup, login, logout };
