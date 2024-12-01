"use client";

import { CreateEquipamentoDto, Equipamento } from "@/types/equipamento";
import { SubmitHandler, useForm } from "react-hook-form";

interface EquipamentoFormProps {
  equipamento?: Equipamento;
}

const EquipamentoForm = ({ equipamento }: EquipamentoFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateEquipamentoDto>();

  const onSubmit: SubmitHandler<CreateEquipamentoDto> = (data) => {};

  return (
    <main>
      <div className="container mt-3 col-3">
        <h4 className="text-center">
          {equipamento ? "Atualizar equipamento" : "Novo equipamento"}
        </h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              aria-describedby="nome"
              value={equipamento?.nome}
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              rows={2}
              value={equipamento?.descricao}
              {...register("descricao", { required: true })}
            ></textarea>
            {errors.descricao && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="observacoes" className="form-label">
              Observações
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={2}
              value={equipamento?.observacoes}
              {...register("observacoes", { required: true })}
            ></textarea>
            {errors.observacoes && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="origem" className="form-label">
              Origem
            </label>
            <textarea
              className="form-control"
              id="origem"
              rows={2}
              value={equipamento?.origem}
              {...register("origem", { required: true })}
            ></textarea>
            {errors.origem && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="numSerie" className="form-label">
              Número de série
            </label>
            <input
              type="text"
              className="form-control"
              id="numSerie"
              aria-describedby="numSerie"
              value={equipamento?.numSerie}
              {...register("numSerie", { required: true })}
            />
            {errors.numSerie && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="d-grid col-12">
            <button type="submit" className="btn btn-primary">
              {equipamento ? "Atualizar" : "Criar"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EquipamentoForm;
