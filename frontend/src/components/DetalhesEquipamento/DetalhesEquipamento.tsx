import { useRemoveEquipamento } from "@/hooks/useRemoveEquipamento";
import { Equipamento, UpdateEquipamentoDto } from "@/types/equipamento";
import { useRouter } from "next/navigation";
import EquipamentoForm from "../EquipamentoForm/EquipamentoForm";
import { useAtualizaEquipamento } from "@/hooks/useAtualizaEquipamento";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

interface DetalhesEquipamentoProps {
  equipamento: Equipamento;
}

const DetalhesEquipamento = ({ equipamento }: DetalhesEquipamentoProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: atualizaEquipamento } = useAtualizaEquipamento(
    equipamento.id,
    () => {
      queryClient.invalidateQueries({ queryKey: ["buscaEquipamento"] });
      toast.success("Equipamento atualizado com sucesso!");
    },
    () => toast.error("Ocorreu um erro ao tentar atualizar o equipamento")
  );
  const { mutate: removeEquipamento } = useRemoveEquipamento(
    () => {
      router.push("/equipamentos");
      toast.success("Equipamento excluido com sucesso!");
    },
    () => toast.error("Ocorreu um erro ao tentar excluir o equipamento!")
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
          <i className="bi bi-pencil-fill me-1"></i>
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeEquipamento(equipamento.id)}
        >
          <i className="bi bi-trash-fill me-1"></i>
          Excluir
        </button>
      </div>

      <EquipamentoForm
        equipamento={equipamento}
        titulo="Atualizar equipamento"
        onSubmit={(data: UpdateEquipamentoDto) => {
          console.log(data);
          atualizaEquipamento(data);
        }}
      />
    </div>
  );
};

export default DetalhesEquipamento;
