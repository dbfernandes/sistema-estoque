import React, { FormEvent } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import api from "@/services/api";

import { useRouter } from "next/router";

import ProdutoForm from "./ProdutoForm";
import { CreateProdutoDto } from "@/types/produto";

function ProdutoCreate() {
  const router = useRouter();

  const handleSubmit = (produto: CreateProdutoDto) => {
    api
      .post("/produto", produto)
      .then(() => router.push("/produto"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Criação de Produto</h2>
      <ProdutoForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default ProdutoCreate;
