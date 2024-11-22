import { Equipamento } from "@/types/equipamento";
import Image from "next/image";
import Link from "next/link";

interface CardEquipamentoProps {
  equipamento: Equipamento;
}

const CardEquipamento = ({ equipamento }: CardEquipamentoProps) => {
  return (
    <div className="col-3">
      <div className="card">
        {/* <Image
          src="#"
          className="card-img-top"
          alt="..."
          width={150}
          height={180}
        /> */}
        <div className="card-body">
          <h5 className="card-title">{equipamento.nome}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#"></a>
          <Link
            href={`equipamentos/${equipamento.id}`}
            className="btn btn-primary"
          >
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEquipamento;
