import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { listProjeto, createProjeto, getProjetoById, projetoAlreadyExist, removeProjeto } from "./projetos.service";
import createProjetoDto from "./projeto.types";

const list = async (req: Request, res: Response) =>{

    const projetos = await listProjeto();

    if(projetos === null) res.status(StatusCodes.NOT_FOUND).send("Não existem projetos cadastrados");
    res.status(StatusCodes.ACCEPTED).json(projetos);
}

const create = async (req: Request, res: Response) => {
    const projeto: createProjetoDto = req.body;

    if(await projetoAlreadyExist(projeto.nome)) return res.status(StatusCodes.CONFLICT).send("Projeto já cadastrado na base de dados")
    const novoProjeto = await createProjeto(projeto)
    
}

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getProjetoById(id); 

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    res.status(StatusCodes.ACCEPTED).json(projeto);
}

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const projeto = await getProjetoById(id);

    if(projeto === null) res.status(StatusCodes.NOT_FOUND).send("Esse projeto não está cadastrado na base de dados");
    await removeProjeto(id);
    res.status(StatusCodes.NO_CONTENT).send();
}

export default {create, remove, getById, list}