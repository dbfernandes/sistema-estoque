"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const doc = {
    info: {
        title: 'API da Loja virtual',
        description: 'Documentação da API',
    },
    host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = './src/swagger-output.json';
const routes = ['./src/router/index.ts'];
(0, swagger_autogen_1.default)()(outputFile, routes, doc);
