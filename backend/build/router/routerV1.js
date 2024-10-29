"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = __importDefault(require("../resources/auth/auth.router"));
const usuario_router_1 = __importDefault(require("../resources/usuario/usuario.router"));
const equipamento_router_1 = __importDefault(require("../resources/equipamento/equipamento.router"));
const projetos_router_1 = __importDefault(require("../resources/projeto/projetos.router"));
const router = (0, express_1.Router)();
router.use('/', 
// #swagger.tags = ['Auth']
auth_router_1.default);
router.use('/usuario', 
// #swagger.tags = ['Usuario']s
usuario_router_1.default);
router.use('/equipamento', 
// #swagger.tags = ['Equipamento']s
equipamento_router_1.default);
router.use('/projeto', projetos_router_1.default);
exports.default = router;
