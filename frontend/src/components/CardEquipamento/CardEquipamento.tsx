import { Produto } from "@/types/produto";
import Image from "next/image";

interface CardEquipamentoProps {
  produto: Produto;
}

const CardEquipamento = ({ produto }: CardEquipamentoProps) => {
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
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardEquipamento;
