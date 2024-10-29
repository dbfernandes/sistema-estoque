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
exports.removeUser = exports.updateUser = exports.listAllUsers = exports.getUser = exports.createUsuario = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const prisma = new client_1.PrismaClient();
const createUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield (0, bcryptjs_1.genSalt)(parseInt(process.env.SALT_ROUNDS));
        const senha = yield (0, bcryptjs_1.hash)(usuario.senha, salt);
        return yield prisma.usuario.create({
            data: Object.assign(Object.assign({}, usuario), { senha }),
        });
    }
    catch (err) {
        console.error('Error creating user:', err);
        throw err;
    }
});
exports.createUsuario = createUsuario;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioDb = yield prisma.usuario.findUnique({
        where: {
            id: id
        }
    });
    return usuarioDb;
});
exports.getUser = getUser;
const listAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const usersDb = yield prisma.usuario.findMany();
    return usersDb;
});
exports.listAllUsers = listAllUsers;
const updateUser = (id, usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const userDb = yield prisma.usuario.update({
        where: {
            id: id
        }, data: usuario
    });
    return userDb;
});
exports.updateUser = updateUser;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.usuario.delete({
        where: {
            id: id
        }
    });
});
exports.removeUser = removeUser;
