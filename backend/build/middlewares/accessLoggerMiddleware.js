"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/middlewares/accessLoggerMiddleware.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logAccess = (req, format) => {
    const accessTime = new Date().toISOString();
    const url = req.url;
    const method = req.method;
    if (format === 'simples') {
        return `${accessTime}, ${url}, ${method}\n`;
    }
    else {
        const httpVersion = req.httpVersion;
        const userAgent = req.get('User-Agent');
        return `${accessTime}, ${url}, ${method}, ${httpVersion}, ${userAgent}\n`;
    }
};
const ensureLogDirectoryExists = (logDirectory) => {
    if (!fs_1.default.existsSync(logDirectory)) {
        fs_1.default.mkdirSync(logDirectory, { recursive: true });
    }
};
const accessLoggerMiddleware = (options) => {
    return (req, res, next) => {
        const logMessage = logAccess(req, options.format);
        const logDirectory = process.env.LOG_DIR || 'logs';
        const logFilePath = path_1.default.join(__dirname, '..', '..', logDirectory, 'access.log'); // Ajuste do caminho
        // Garantir que o diretório de log exista
        ensureLogDirectoryExists(path_1.default.join(__dirname, '..', '..', logDirectory));
        // Escrever no arquivo de log
        fs_1.default.appendFile(logFilePath, logMessage, (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo de log:', err);
            }
        });
        next();
    };
};
exports.default = accessLoggerMiddleware;
