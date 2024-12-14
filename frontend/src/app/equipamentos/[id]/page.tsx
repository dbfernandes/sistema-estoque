"use client";
import { useBuscaEquipamento } from "@/hooks/useBuscaEquipamento";
import DetalhesEquipamento from "@/components/DetalhesEquipamento/DetalhesEquipamento";

const EquipamentoVer = ({ params }: { params: { id: string } }) => {
  const { equipamento, isPending, isError } = useBuscaEquipamento(params.id);

  if (isPending) return <h5>Carregando...</h5>;
  if (isError) return <h5>Erro!</h5>;
  if (!equipamento) return;

  return (
    <div className="container mt-3">
      <h3>Detalhes do equipamento:</h3>
      <DetalhesEquipamento equipamento={equipamento} />
    </div>
  );
};

export default EquipamentoVer;
