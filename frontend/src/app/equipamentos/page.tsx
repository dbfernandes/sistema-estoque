"use client";
import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import Form from "@/components/Form/Form";
import Modal from "@/components/Modal/Modal";
import { useAdicionaEquipamento } from "@/hooks/useAdicionaEquipamento";
import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import { CreateEquipamentoDto, Equipamento } from "@/types/equipamento";
import Link from "next/link";

const EquipamentosCriar = () => {
  const { equipamentos, isError, isPending } = useListaEquipamentos();
  const { mutate: criarEquipamento } = useAdicionaEquipamento();

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
