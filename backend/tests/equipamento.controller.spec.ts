import request from 'supertest';
import app from '../src/index';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { afterEach, describe, expect, it, jest } from '@jest/globals';

// Mocka o service, garantindo que o caminho seja o mesmo do import real.
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

describe('Equipamento Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /equipamentos', () => {
    it('deve retornar 200 e a lista de equipamentos', async () => {
      (listEquipamentos as jest.MockedFunction<typeof listEquipamentos>)
        .mockResolvedValue([{
          id: 'abc123',
          nome: 'Equip de teste',
          descricao: 'Descrição de teste',
          observacoes: 'Observações...',
          origem: 'Alguma origem',
          numSerie: 'NUM123',
          tombamento: 'TB123',
          tipoEquipamento: 'Notebook',
          statusEquip: StatusEquipamento.Emprestado,
          createdAt: new Date(),
          updatedAt: new Date()
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
          createdAt: new Date(),
          updatedAt: new Date()
        }]);

      const res = await request(app).get('/equipamentos');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual([
        { id: '1', nome: 'Equip-1' },
        { id: '2', nome: 'Equip-2' },
      ]);
    });
  });

  describe('POST /equipamentos', () => {
    it('deve criar um novo equipamento se não for duplicado', async () => {
      (EquipamentoAlreadyExists as jest.MockedFunction<typeof EquipamentoAlreadyExists>).mockResolvedValue(false);
      (createEquipamento as jest.MockedFunction<typeof createEquipamento>).mockResolvedValue({
        id: '10',
        nome: 'Novo Equipamento',
        descricao: 'Descrição de teste',
        observacoes: 'Observações...',
        origem: 'Alguma origem',
        numSerie: 'ABC123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const res = await request(app).post('/equipamentos').send({
        numSerie: 'ABC123',
        nome: 'Novo Equipamento',
      });

      expect(res.status).toBe(StatusCodes.CREATED);
      expect(res.body).toEqual({
        id: '10',
        nome: 'Novo Equipamento',
      });
    });
  });

  describe('GET /equipamentos/:id', () => {
    it('deve retornar 200 se o equipamento for encontrado', async () => {
      (readEquipamento as jest.MockedFunction<typeof readEquipamento>).mockResolvedValue({
        id: '22',
        nome: 'EquipX',
        descricao: 'Descrição de teste',
        observacoes: 'Observações...',
        origem: 'Alguma origem',
        numSerie: 'NUM123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const res = await request(app).get('/equipamentos/22');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({ id: '22', nome: 'EquipX' });
    });
  });

  describe('PUT /equipamentos/:id', () => {
    it('deve atualizar e retornar 200 se não houver duplicado', async () => {
      (EquipamentoAlreadyExists as jest.MockedFunction<typeof EquipamentoAlreadyExists>).mockResolvedValue(false);
      (updateEquipamento as jest.MockedFunction<typeof updateEquipamento>).mockResolvedValue({
        id: '1',
        nome: 'Equip Atualizado',
        descricao: 'Descrição atualizada',
        observacoes: 'Observações atualizadas',
        origem: 'Origem atualizada',
        numSerie: 'NUM123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const res = await request(app).put('/equipamentos/1').send({
        nome: 'Equip Atualizado',
      });

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({ id: '1', nome: 'Equip Atualizado' });
    });
  });

  describe('DELETE /equipamentos/:id', () => {
    it('deve remover o equipamento e retornar 200', async () => {
      (removeEquipamento as jest.MockedFunction<typeof removeEquipamento>).mockResolvedValue({
        id: '44',
        nome: 'Equip Removido',
        descricao: 'Descrição de teste',
        observacoes: 'Observações...',
        origem: 'Alguma origem',
        numSerie: 'NUM123',
        tombamento: 'TB123',
        tipoEquipamento: 'Notebook',
        statusEquip: StatusEquipamento.Emprestado,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const res = await request(app).delete('/equipamentos/44');

      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual({ id: '44', nome: 'Equip Removido' });
    });
  });
});


