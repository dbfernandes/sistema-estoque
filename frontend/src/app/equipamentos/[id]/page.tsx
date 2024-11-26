"use client";
import { equipamentos } from "@/mocks/equipamentos";
import { useParams } from "next/navigation";
import Link from "next/link";

const EquipamentoVer = () => {
  const params = useParams<{ id: string }>();
  const equipamento = equipamentos.find(
    (equipamento) => equipamento.id == params?.id
  );

  return (
    <div className="container">
      <h1>Sobre o equipamento:</h1>

      <div className="card">
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

      <Link href={`/equipamentos/criar`} className="btn btn-primary mt-2">
        Adicionar novo equipamento
      </Link>
    </div>
  );
};

export default EquipamentoVer;
