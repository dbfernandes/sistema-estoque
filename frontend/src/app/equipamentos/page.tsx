"use client";
import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import Form from "@/components/Form/Form";
import Modal from "@/components/Modal/Modal";
import { useAdicionaEquipamento } from "@/hooks/useAdicionaEquipamento";
import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import { CreateEquipamentoDto, Equipamento } from "@/types/equipamento";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const EquipamentosCriar = () => {
  const queryClient = useQueryClient();
  const { equipamentos, isError, isPending } = useListaEquipamentos();
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
          {equipamentos.map((equipamento: Equipamento) => (
            <CardEquipamento equipamento={equipamento} key={equipamento.id} />
          ))}
        </div>
      </div>

      <Modal titulo="Novo Equipamento">
        <Form
          onSubmit={(equipamento: CreateEquipamentoDto) => {
            console.log(equipamento);
            criarEquipamento(equipamento);
          }}
        />
      </Modal>
    </>
  );
};

export default EquipamentosCriar;
