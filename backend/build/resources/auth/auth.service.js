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
exports.checkCredentials = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const prisma = new client_1.PrismaClient();
const checkCredentials = (email, senha) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield prisma.usuario.findUnique({ where: { email } });
    if (!usuario)
        return false;
    const ok = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
    if (ok)
        return usuario;
    return false;
});
exports.checkCredentials = checkCredentials;
