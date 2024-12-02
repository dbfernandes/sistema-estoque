"use client";
import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import { equipamentos } from "@/mocks/equipamentos";
import { Equipamento } from "@/types/equipamento";

const EquipamentosCriar = () => {
  const { equipamentos, isError, isPending } = useListaEquipamentos();

  return (
    <>
      <div className="container mt-2">
        <h3>Equipamentos:</h3>

        <div className="row">
          {equipamentos.map((equipamento: Equipamento) => (
            <CardEquipamento equipamento={equipamento} key={equipamento.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EquipamentosCriar;
