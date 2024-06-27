import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import api from "@/utils/api";
import { Produto } from "@/types/produto";
import styles from "./produto.module.css";

function ProdutoIndex() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api.get("/produto", { withCredentials: true }).then((data) => {
      setProdutos(data.data);
    });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <h1
          style={{
            marginTop: 0,
          }}
        >
          Produtos
        </h1>
        <Button component={Link} href="/produto/create" variant="contained">
          <AddIcon />
        </Button>
      </div>
      <ol>
        {produtos.map((prod) => (
          <li key={prod.id} className={styles.listaProdutos}>
            <Link href={`/produto/${prod.id}`}>{prod.nome}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProdutoIndex;
