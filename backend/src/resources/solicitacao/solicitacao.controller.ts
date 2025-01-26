import { Request, Response } from "express"
import { createSolicitacao, getSolicitacaoById, listSolicitacao, removeSolicitacao, solicitacaoAlreadyExists, updateSolicitacao } from "../solicitacao/solicitacao.service"
import { CreateSolicitacaoDto, CreateSolicitacaoEquipamentoDto, UpdateSolicitacaoDto } from "../solicitacao/solicitacao.types"
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const isError = (error: unknown): error is Error => {
  return (error as Error).message !== undefined;
};

const create = async (req: Request, res: Response) => {

    const {
        requisitanteId,
        aprovadorId,
        observacoes,
        statusSolic,
        equipamentos
    } = req.body

    if(!equipamentos || !Array.isArray(equipamentos))
        return res.status(400).send('O campo "equipamentos" é obrigatório e deve ser um array.')

    const solicitacaoData: CreateSolicitacaoDto = {
        requisitanteId: requisitanteId,
        aprovadorId: aprovadorId,
        observacoes: observacoes,
        statusSolic: statusSolic,
    }

    //const solicitacao = await createSolicitacao(solicitacaoData)

    console.log(equipamentos.length + '\n' + JSON.stringify(equipamentos))

    // Cada equipamento adicionado deve ser salvo em uma entidade nova da tabela SolicitacaoEquipamento???
    // Isso pode ser feito com um loop ou um map, dependendo da quantidade de equipamentos a serem adicionados.

    /*const solicitacaoEquipamentoData: CreateSolicitacaoEquipamentoDto = {
        solicitacaoId: solicitacao.id,
        equipamentoId: equipamentos.id,
        projetoId: equipamento.projetoId,
    }
    const solicitacaoEquipamento = await createSolicitacaoEquipamento(solicitacaoEquipamentoData)
    */
}

const list = async (req: Request, res: Response) =>{

    const projetos = await listSolicitacao();

    if(projetos === null) res.status(StatusCodes.NOT_FOUND).send("Não existem projetos cadastrados");
    res.status(StatusCodes.ACCEPTED).json(projetos);
}

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getSolicitacaoById(id); 

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    res.status(StatusCodes.ACCEPTED).json(projeto);
}

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getSolicitacaoById(id);

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    await removeSolicitacao(id);
    res.status(StatusCodes.NO_CONTENT).send();
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const solicitacao: UpdateSolicitacaoDto = req.body;
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