"use client";
import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import { equipamentos } from "@/mocks/equipamentos";
import { Equipamento } from "@/types/equipamento";
import Link from "next/link";

const EquipamentosCriar = () => {
  const { equipamentos, isError, isPending } = useListaEquipamentos();

  return (
    <>
      <div className="container mt-5">
        <h3>Equipamentos:</h3>

        <div className="d-flex justify-content-end mb-3">
          <Link type="button" className="btn btn-success p-2" href={"/equipamentos/criar"}>
            Adicionar equipamento
          </Link>
        </div>

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
