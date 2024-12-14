"use client";
import EquipamentoForm from "@/components/EquipamentoForm/EquipamentoForm";
import ListagemEquipamentos from "@/components/ListagemEquipamentos/ListagemEquipamentos";
import { useAdicionaEquipamento } from "@/hooks/useAdicionaEquipamento";
import { CreateEquipamentoDto } from "@/types/equipamento";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const EquipamentosCriar = () => {
  const queryClient = useQueryClient();
  const { mutate: criarEquipamento } = useAdicionaEquipamento(
    () => {
      queryClient.invalidateQueries({ queryKey: ["listaEquipamentos"] });
      toast.success("Equipamento criado com sucesso!");
    },
    () => {
      toast.error("Ocorreu um erro ao tentar adicionar o equipamento");
    }
  );

  return (
    <>
      <div className="container mt-5">
        <h3>Equipamentos:</h3>

        <div className="d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn btn-success p-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus-circle-fill me-1"></i>
            Adicionar Equipamento
          </button>
        </div>

        <div className="row">
          <ListagemEquipamentos />
        </div>
      </div>

      <EquipamentoForm
        titulo="Novo Equipamento"
        onSubmit={(equipamento: CreateEquipamentoDto) => {
          console.log(equipamento);
          criarEquipamento(equipamento);
        }}
      />
    </>
  );
};

export default EquipamentosCriar;
