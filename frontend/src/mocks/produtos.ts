import { Produto } from "@/types/produto";

const produtos: Produto[] = [
    {id: 1, nome: 'Computador', preco: 5000, estoque: 10},
    {id: 2, nome: 'Celular', preco: 4000, estoque: 15},
    {id: 3, nome: 'Tablet', preco: 6000, estoque: 18},
    {id: 4, nome: 'Calculadora', preco: 60, estoque: 45},
];

export const getOneProduto = (id: number): Produto | undefined => {
    return produtos.find(produtos => produtos.id === id);
}

export const getAllProdutos = () => produtos;