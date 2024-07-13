import { Request, Response } from 'express';
import {
  createEquipamento,
  listEquipamentos,
  EquipamentoAlreadyExists,
  readEquipamento,
  updateEquipamento,
  removeEquipamento,
} from './equipment.service';
import { createEquipamentoDto, updateEquipamentoDto } from './equipment.types';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const index = async function (req: Request, res: Response) {
  try {
    const Equipamentos = await listEquipamentos();
    res.status(StatusCodes.OK).json(Equipamentos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async function (req: Request, res: Response) {
  const Equipamento: createEquipamentoDto = req.body;
  try {
    if (await EquipamentoAlreadyExists(Equipamento.nome)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const novoEquipamento = await createEquipamento(Equipamento);
      res.status(StatusCodes.CREATED).json(novoEquipamento);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async function (req: Request, res: Response) {
  const { id } = req.params;
  try {
    const Equipamento = await readEquipamento(id);
    if (!Equipamento)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(Equipamento);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const update = async function (req: Request, res: Response) {
  const { id } = req.params;
  const Equipamento: updateEquipamentoDto = req.body;
  try {
    if (await EquipamentoAlreadyExists(Equipamento.nome)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const EquipamentoAtualizado = await updateEquipamento(id, Equipamento);
      res.status(StatusCodes.OK).json(EquipamentoAtualizado);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async function (req: Request, res: Response) {
  const { id } = req.params;
  try {
    const EquipamentoApagado = await removeEquipamento(id);
    res.status(StatusCodes.OK).json(EquipamentoApagado);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
