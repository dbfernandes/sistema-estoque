import { Equipamento } from "@/types/equipamento";
import Link from "next/link";

interface CardEquipamentoProps {
  equipamento: Equipamento;
}

const CardEquipamento = ({ equipamento }: CardEquipamentoProps) => {
  return (
    <div className="col-3">
      <div className="card mt-3 tab-card">
        <div className="card-header tab-card-header">
          <ul
            className="nav nav-tabs card-header-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link"
                id="one-tab"
                data-toggle="tab"
                href="#one"
                role="tab"
                aria-controls="One"
                aria-selected="true"
              >
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="two-tab"
                data-toggle="tab"
                href="#two"
                role="tab"
                aria-controls="Two"
                aria-selected="false"
              >
                Observações
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active p-3"
            id="one"
            role="tabpanel"
            aria-labelledby="one-tab"
          >
            <h5 className="card-title">{equipamento.nome}</h5>
            <p className="card-text">{equipamento.descricao}</p>
            <a
              href={`equipamentos/${equipamento.id}`}
              className="btn btn-primary"
            >
              Ver mais detalhes
            </a>
          </div>
          <div
            className="tab-pane fade p-3"
            id="two"
            role="tabpanel"
            aria-labelledby="two-tab"
          >
            <h5 className="card-title">{equipamento.nome}</h5>
            <p className="card-text">{equipamento.observacoes}</p>
            <a
              href={`equipamentos/${equipamento.id}`}
              className="btn btn-primary"
            >
              Ver mais detalhes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEquipamento;
