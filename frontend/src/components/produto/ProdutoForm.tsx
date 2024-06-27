import React, { FormEvent, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { CreateProdutoDto, Produto } from "@/types/produto";

interface Props {
  handleSubmit: (produto: CreateProdutoDto) => void;
  produto?: Produto;
}

function ProdutoForm({ handleSubmit, produto }: Props) {
  const [nome, setNome] = useState<string>(produto ? produto.nome : "");
  const [preco, setPreco] = useState<number | undefined>(
    produto ? produto.preco : undefined
  );
  const [estoque, setEstoque] = useState<number | undefined>(
    produto ? produto.estoque : undefined
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const produto = { nome: nome!, preco: preco!, estoque: estoque! };
    handleSubmit(produto);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            required
            label="Preço"
            value={preco ?? ""}
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
        </Box>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            required
            label="Estoque"
            value={estoque ?? ""}
            onChange={(e) => setEstoque(parseInt(e.target.value))}
          />
        </Box>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default ProdutoForm;
