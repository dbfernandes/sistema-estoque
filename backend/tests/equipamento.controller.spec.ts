import request from 'supertest';
import app  from '../src/index'; // Certifique-se de exportar apenas o "app", sem dar app.listen(...) no index
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { afterAll, afterEach, beforeAll, describe, expect, it, jest } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';

jest.mock('../src/middlewares/isAdmin', () => {
  return jest.fn((req: Request, res: Response, next: NextFunction) => next());
});

jest.mock('../src/middlewares/validate', () => {
  // validate(schema) vira uma função que retorna um middleware que chama next()
  return jest.fn(() => (req: Request, res: Response, next: NextFunction) => next());
});
// Mock do service
jest.mock('../src/resources/equipamento/equipamento.service', () => ({
  createEquipamento: jest.fn(),
  listEquipamentos: jest.fn(),
  EquipamentoAlreadyExists: jest.fn(),
  readEquipamento: jest.fn(),
  updateEquipamento: jest.fn(),
  removeEquipamento: jest.fn(),
}));

import {
  createEquipamento,
  listEquipamentos,
  EquipamentoAlreadyExists,
  readEquipamento,
  updateEquipamento,
  removeEquipamento,
} from '../src/resources/equipamento/equipamento.service';
import { StatusEquipamento } from '@prisma/client';

describe('Equipamento Controller (com sessão)', () => {
  let agent: request.SuperAgentTest;

  const created_at = new Date();
  const updated_at = new Date();

  beforeAll(async () => {
    // Para simular sessão, mas sem login real
    agent = request.agent(app) as unknown as request.SuperAgentTest;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('GET /v1/equipamento', () => {
    it('deve retornar 200 e a lista de equipamentos', async () => {
      (listEquipamentos as jest.MockedFunction<typeof listEquipamentos>)
        .mockResolvedValue([
          {
            id: 'abc123',
            nome: 'Equip de teste',
            descricao: 'Descrição de teste',
            observacoes: 'Observações...',
            origem: 'Alguma origem',
            numSerie: 'NUM123',
            tombamento: 'TB123',
            tipoEquipamento: 'Notebook',
            statusEquip: StatusEquipamento.Emprestado,
            createdAt: created_at,
            updatedAt: updated_at,
          },
          {
            id: 'abc234',
            nome: 'Equipamento teste',
            descricao: 'Descrição teste',
            observacoes: 'Observações...',
            origem: 'Alguma origem',
            numSerie: 'NUM9548',
            tombamento: 'TB948',
            tipoEquipamento: 'Notebook',
            statusEquip: StatusEquipamento.Emprestado,
            createdAt: created_at,
            updatedAt: updated_at,
          },
        ]);

      // Em vez de request(app).get(...), usamos agent.get(...)
      const res = await agent.get('/v1/equipamento');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual([
        {
          id: 'abc123',
          nome: 'Equip de teste',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at.toISOString(),
          updatedAt: updated_at.toISOString(),
        },
        {
          id: 'abc234',
          nome: 'Equipamento teste',
          descricao: 'Descrição teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'NUM9548',
          tombamento: 'TB948',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at.toISOString(),
          updatedAt: updated_at.toISOString(),
        },
      ]);
    });
  });

  describe('POST /v1/equipamento', () => {
    it('deve criar um novo equipamento se não for duplicado', async () => {
      (EquipamentoAlreadyExists as jest.MockedFunction<typeof EquipamentoAlreadyExists>)
        .mockResolvedValue(false);
      (createEquipamento as jest.MockedFunction<typeof createEquipamento>)
        .mockResolvedValue({
          id: '10',
          nome: 'Novo Equipamento',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'ABC123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at,
          updatedAt: updated_at,
        });

      // Se sua rota exigir autenticação por sessão, precisamos do agent
      // e a sessão deve ter sido criada (via login) no beforeAll
      const res = await agent
        .post('/v1/equipamento')
        .send({
          numSerie: 'ABC123',
          nome: 'Novo Equipamento',
        });

      expect(res.status).toBe(StatusCodes.CREATED);
      expect(res.body).toEqual({
        id: '10',
          nome: 'Novo Equipamento',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'ABC123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at.toISOString(),
          updatedAt: updated_at.toISOString(),
      });
    });
  });

  describe('GET /v1/equipamento/:id', () => {
    it('deve retornar 200 se o equipamento for encontrado', async () => {
      (readEquipamento as jest.MockedFunction<typeof readEquipamento>)
        .mockResolvedValue({
          id: '22',
          nome: 'EquipX',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at,
          updatedAt: updated_at,
        });

      const res = await agent.get('/v1/equipamento/22');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({
        id: '22',
        nome: 'EquipX',
        descricao: 'Descrição de teste',
        observacoes: 'Observações...',
        origem: 'Alguma origem',
        numSerie: 'NUM123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: created_at.toISOString(),
        updatedAt: updated_at.toISOString(),
        });
    });
  });

  describe('PUT /v1/equipamento/:id', () => {
    it('deve atualizar e retornar 200 se não houver duplicado', async () => {
      (EquipamentoAlreadyExists as jest.MockedFunction<typeof EquipamentoAlreadyExists>)
        .mockResolvedValue(false);
      (updateEquipamento as jest.MockedFunction<typeof updateEquipamento>)
        .mockResolvedValue({
          id: '1',
          nome: 'Equip Atualizado',
          descricao: 'Descrição atualizada',
          observacoes: 'Observações atualizadas',
          origem: 'Origem atualizada',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at,
          updatedAt: updated_at,
        });

      const res = await agent
        .put('/v1/equipamento/1')
        .send({ nome: 'Equip Atualizado' });

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({
        id: '1',
          nome: 'Equip Atualizado',
          descricao: 'Descrição atualizada',
          observacoes: 'Observações atualizadas',
          origem: 'Origem atualizada',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at.toISOString(),
          updatedAt: updated_at.toISOString(),
      });
    });
  });

  describe('DELETE /v1/equipamento/:id', () => {
    it('deve remover o equipamento e retornar 200', async () => {
      (removeEquipamento as jest.MockedFunction<typeof removeEquipamento>)
        .mockResolvedValue({
          id: '44',
          nome: 'Equip Removido',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: created_at,
          updatedAt: updated_at,
        });

      const res = await agent.delete('/v1/equipamento/44');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({
        id: '44',
        nome: 'Equip Removido',
        descricao: 'Descrição de teste',
        observacoes: 'Observações...',
        origem: 'Alguma origem',
        numSerie: 'NUM123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: created_at.toISOString(),
        updatedAt: updated_at.toISOString(),
      });
    });
  });
});
