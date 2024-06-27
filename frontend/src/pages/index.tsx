import { getAllProdutos } from "@/fakeDb/produtos";

export default function Home() {
  const produtos = getAllProdutos();
  return (
    <div>Página Principal da Aplicação</div>
  );
}
