"use client";
import CardEquipamento from "@/components/CardEquipamento/CardEquipamento";
import Form from "@/components/Form/Form";
import Modal from "@/components/Modal/Modal";
import { useListaEquipamentos } from "@/hooks/useListaEquipamentos";
import { equipamentos } from "@/mocks/equipamentos";
import { Equipamento } from "@/types/equipamento";
import Link from "next/link";

const EquipamentosCriar = () => {
  const { equipamentos, isError, isPending } = useListaEquipamentos();

  console.log("oi");

  return (
    <>
      <div className="container mt-5">
        <h3>Equipamentos:</h3>

        <div className="d-flex justify-content-end mb-3">
          {/* <Link
            type="button"
            className="btn btn-success p-2"
            href={"/equipamentos/criar"}
          >
            Adicionar equipamento
          </Link> */}

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
        <Form />
      </Modal>
    </>
  );
};

export default EquipamentosCriar;
