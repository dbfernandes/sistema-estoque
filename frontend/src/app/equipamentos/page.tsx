import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import { equipamentos } from "@/mocks/equipamentos";
import { Equipamento } from "@/types/equipamento";

const EquipamentosCriar = () => {
  return (
    <>
      <div className="container">
        {equipamentos.map((equipamento: Equipamento) => (
          <CardEquipamento equipamento={equipamento} key={equipamento.id} />
        ))}
      </div>
    </>
  );
};

export default EquipamentosCriar;
