// src/middlewares/accessLoggerMiddleware.ts
import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

interface LogFormatOptions {
  format: 'simples' | 'completo';
}

const logAccess = (req: Request, format: 'simples' | 'completo'): string => {
  const accessTime = new Date().toISOString();
  const url = req.url;
  const method = req.method;
  if (format === 'simples') {
    return `${accessTime}, ${url}, ${method}\n`;
  } else {
    const httpVersion = req.httpVersion;
    const userAgent = req.get('User-Agent');
    return `${accessTime}, ${url}, ${method}, ${httpVersion}, ${userAgent}\n`;
  }
};

const ensureLogDirectoryExists = (logDirectory: string) => {
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }
};

const accessLoggerMiddleware = (options: LogFormatOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const logMessage = logAccess(req, options.format);
    const logDirectory = process.env.LOG_DIR || 'logs';
    const logFilePath = path.join(
      __dirname,
      '..',
      '..',
      logDirectory,
      'access.log',
    ); // Ajuste do caminho

    // Garantir que o diretório de log exista
    ensureLogDirectoryExists(path.join(__dirname, '..', '..', logDirectory));

    // Escrever no arquivo de log
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo de log:', err);
      }
    });

    next();
  };
};

export default accessLoggerMiddleware;
