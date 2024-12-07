"use client";
import EquipamentoForm from "@/components/EquipamentoForm/EquipamentoForm";
import { useBuscaEquipamento } from "@/hooks/useBuscaEquipamento";
import { equipamentos } from "@/mocks/equipamentos";
import { useParams } from "next/navigation";

const EquipamentoAtualizar = () => {
  const params = useParams<{ id: string }>();
  const { equipamento } = useBuscaEquipamento(params.id);
  return <EquipamentoForm equipamento={equipamento} />;
};

export default EquipamentoAtualizar;
