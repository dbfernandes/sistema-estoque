import { Request, Response } from "express"
import { createEmprestimo, getEmprestimoById, listEmprestimo, removeSolicitacao, solicitacaoAlreadyExists, updateSolicitacao } from "./emprestimo.service"
import { CreateEmprestimoDto, CreateSolicitacaoEquipamentoDto, UpdateEmprestimoDto } from "./emprestimo.types"
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { StatusSolicitacao } from "@prisma/client";

const isError = (error: unknown): error is Error => {
  return (error as Error).message !== undefined;
};

const create = async (req: Request, res: Response) => {

    const {
        requisitanteId,
        aprovadorId,
        observacoes,
        equipamentos
    } = req.body

    if(!equipamentos || !Array.isArray(equipamentos))
        return res.status(400).send('O campo "equipamentos" é obrigatório e deve ser um array.')

    const emprestimoData: CreateEmprestimoDto = {
        requisitanteId: requisitanteId,
        aprovadorId: aprovadorId,
        observacoes: observacoes,
        statusSolic: StatusSolicitacao.Emprestado,
    }

    const emprestimo = await createEmprestimo(emprestimoData)

    console.log(equipamentos.length + '\n' + JSON.stringify(equipamentos))
  
}

const list = async (req: Request, res: Response) =>{

    const projetos = await listEmprestimo();

    if(projetos === null) res.status(StatusCodes.NOT_FOUND).send("Não existem projetos cadastrados");
    res.status(StatusCodes.ACCEPTED).json(projetos);
}

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getEmprestimoById(id); 

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    res.status(StatusCodes.ACCEPTED).json(projeto);
}

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getEmprestimoById(id);

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    await removeSolicitacao(id);
    res.status(StatusCodes.NO_CONTENT).send();
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const solicitacao: UpdateEmprestimoDto = req.body;
  try {
    if (await solicitacaoAlreadyExists(id)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const solicitacaoAtualizado = await updateSolicitacao(id, solicitacao);
      res.status(StatusCodes.OK).json(solicitacaoAtualizado);
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

export default {create, list, remove, getById, update};