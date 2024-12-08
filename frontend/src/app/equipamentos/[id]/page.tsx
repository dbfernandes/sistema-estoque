"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useBuscaEquipamento } from "@/hooks/useBuscaEquipamento";
import { useRemoveEquipamento } from "@/hooks/useRemoveEquipamento";

const EquipamentoVer = () => {
  const params = useParams<{ id: string }>();
  const { equipamento } = useBuscaEquipamento(params.id);

  return (
    <div className="container mt-3">
      <h3>Detalhes do equipamento:</h3>

      <div className="card mt-3">
        <h5 className="card-header">{equipamento?.nome}</h5>

        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-body-secondary">Descrição</h6>
          <p className="card-text">{equipamento?.descricao}</p>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            Observações
          </h6>
          <p className="card-text">{equipamento?.observacoes}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Origem: {equipamento?.origem}</li>
          <li className="list-group-item">
            Número de série: {equipamento?.numSerie}
          </li>
        </ul>
      </div>

      <Link href={`/equipamentos/criar`} className="btn btn-primary mt-3">
        Adicionar novo equipamento
      </Link>

      <Link
        href={`/equipamentos/atualizar/${params?.id}`}
        className="btn btn-primary mt-3 ms-2"
      >
        Atualizar equipamento
      </Link>

      {/* <button
        className="btn btn-primary mt-3 ms-2"
        onClick={() => mutate(params.id)}
      >
        Remover equipamento
      </button> */}
    </div>
  );
};

export default EquipamentoVer;
