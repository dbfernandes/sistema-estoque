import { useRemoveEquipamento } from "@/hooks/useRemoveEquipamento";
import { Equipamento } from "@/types/equipamento";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

interface DetalhesEquipamentoProps {
  equipamento: Equipamento;
}

const DetalhesEquipamento = ({ equipamento }: DetalhesEquipamentoProps) => {
  const router = useRouter();
  const { mutate } = useRemoveEquipamento(
    () => {
      router.push("/equipamentos");
    },
    () => {}
  );

  return (
    <div className="card mt-3 w-50">
      <div className="card-header">{equipamento.nome}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Descrição: {equipamento.descricao}</li>
        <li className="list-group-item">
          Observações: {equipamento.observacoes}
        </li>
        <li className="list-group-item">Origem: {equipamento.origem}</li>
        <li className="list-group-item">
          Número de série: {equipamento.numSerie}
        </li>
        <li className="list-group-item">Status: {equipamento.statusEquip}</li>
      </ul>

      <div className="card-footer text-body-secondary">
        <button
          type="button"
          className="btn btn-warning me-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => mutate(equipamento.id)}
        >
          Excluir
        </button>
      </div>

      <Modal titulo="Atualizar Equipamento">
        <Form equipamento={equipamento}/>
      </Modal>
    </div>
  );
};

export default DetalhesEquipamento;
