import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import { equipamentos } from "@/mocks/equipamentos";
import { Equipamento } from "@/types/equipamento";

const Equipamentos = () => {
  return (
    <>
      {equipamentos.map((equipamento: Equipamento) => (
        <CardEquipamento equipamento={equipamento} key={equipamento.id} />
      ))}
    </>
  );
};

export default Equipamentos;
