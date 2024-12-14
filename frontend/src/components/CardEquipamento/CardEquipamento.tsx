import { Equipamento } from "@/types/equipamento";
import Link from "next/link";

interface CardEquipamentoProps {
  equipamento: Equipamento;
}

const CardEquipamento = ({ equipamento }: CardEquipamentoProps) => {
  return (
    <div className="col-md-4">
      <div className="card mt-3">
        <h5 className="card-header">Sobre</h5>
        <div className="card-body">
          <h5 className="card-title">{equipamento.nome}</h5>
          <p className="card-text">{equipamento.descricao}</p>
          <p className="card-text">{equipamento.statusEquip}</p>
          <a href="#"></a>
          <Link
            href={`equipamentos/${equipamento.id}`}
            className="btn btn-primary w-100"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEquipamento;
