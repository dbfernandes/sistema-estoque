import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import CardEquipamento from "../CardEquipamento/CardEquipamento";

import { Equipamento } from "@/types/equipamento";

const ListagemEquipamentos = () => {
  const { equipamentos, isError, isPending } = useListaEquipamentos();

  if (isError) return <h5>Ocorreu um erro ao lista os equipamento.</h5>;
  if (isPending)
    return (
      <div className="text-center mt-3">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ height: "3rem", width: "3rem" }}
        >
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  if (!equipamentos.length) return <h5 className="mt-3">Não a equipamentos registrados no sistema.</h5>;

  return (
    <>
      {equipamentos.map((equipamento: Equipamento) => (
        <CardEquipamento equipamento={equipamento} key={equipamento.id} />
      ))}
    </>
  );
};

export default ListagemEquipamentos;
