import { Request, Response } from 'express';
import {
  createEquipamento,
  listEquipamentos,
  EquipamentoAlreadyExists,
  readEquipamento,
  updateEquipamento,
  removeEquipamento,
} from './equipamento.service';
import {
  createEquipamentoDto,
  updateEquipamentoDto,
} from './equipamento.types';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const isError = (error: unknown): error is Error => {
  return (error as Error).message !== undefined;
};

const index = async (req: Request, res: Response) => {
  try {
    const equipamentos = await listEquipamentos();
    res.status(StatusCodes.OK).json(equipamentos);
  } catch (err) {
    if (isError(err)) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Unknown error occurred' });
    }
  }
};

const create = async (req: Request, res: Response) => {
  const equipamento: createEquipamentoDto = req.body;
  try {
    if (await EquipamentoAlreadyExists(equipamento.numSerie)) {
      res.status(StatusCodes.CONFLICT).json({
        message: `${ReasonPhrases.CONFLICT}, já existe equipamento com esse número de série`,
      });
    } else {
      const novoEquipamento = await createEquipamento(equipamento);
      res.status(StatusCodes.CREATED).json(novoEquipamento);
    }
  } catch (err) {
    if (isError(err)) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Unknown error occurred' });
    }
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const equipamento = await readEquipamento(id);
    if (!equipamento) {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } else {
      res.status(StatusCodes.OK).json(equipamento);
    }
  } catch (err) {
    if (isError(err)) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Unknown error occurred' });
    }
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const equipamento: updateEquipamentoDto = req.body;
  try {
    if (await EquipamentoAlreadyExists(equipamento.nome)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const equipamentoAtualizado = await updateEquipamento(id, equipamento);
      res.status(StatusCodes.OK).json(equipamentoAtualizado);
    }
  } catch (err) {
    if (isError(err)) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Unknown error occurred' });
    }
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const equipamentoApagado = await removeEquipamento(id);
    res.status(StatusCodes.OK).json(equipamentoApagado);
  } catch (err) {
    if (isError(err)) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Unknown error occurred' });
    }
  }
};

export default { index, create, read, update, remove };
