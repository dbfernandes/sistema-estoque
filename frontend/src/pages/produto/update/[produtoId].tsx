import React from "react";
import ProdutoUpdate from "@/components/produto/ProdutoUpdate";
import { useRouter } from "next/router";

function ProdutoUpdatePage() {
  const router = useRouter();
  const id = router.query.produtoId as string;
  return <ProdutoUpdate id={id} />;
}

export default ProdutoUpdatePage;
