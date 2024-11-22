import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import { produtos } from "@/mocks/produtos";
import { Produto } from "@/types/produto";

const Equipamento = () => {
  return (
    <>
      {produtos.map((produto: Produto) => (
        <CardEquipamento produto={produto} key={produto.id} />
      ))}
    </>
  );
};

export default Equipamento;
