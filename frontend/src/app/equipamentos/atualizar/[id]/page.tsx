"use client"
import EquipamentoForm from "@/components/EquipamentoForm/EquipamentoForm";
import { equipamentos } from "@/mocks/equipamentos";
import { useParams } from "next/navigation";

const EquipamentoAtualizar = () => {
  const params = useParams<{ id: string }>();
  const equipamento = equipamentos.find(
    (equipamento) => equipamento.id == params?.id
  );

  return <EquipamentoForm equipamento={equipamento}/>;
};

export default EquipamentoAtualizar;
