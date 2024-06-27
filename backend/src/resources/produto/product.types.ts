import { Produto } from "@prisma/client"

export type createProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>
export type updateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>

export default createProdutoDto