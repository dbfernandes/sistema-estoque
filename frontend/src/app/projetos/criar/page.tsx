"use client";
import { useAdicionaProjeto } from "@/hooks/useAdicionaProjeto";
import { CreateProjetoDto } from "@/types/projeto";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProjetoCriar = () => {
  const { mutate: adicionaProjeto } = useAdicionaProjeto(
    () => toast.success("Projeto adicionado com sucesso!"),
    () => toast.error("Houve um erro ao adicionar o projeto.")
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjetoDto>();

  const onSubmit: SubmitHandler<CreateProjetoDto> = (data) => {
    console.log(data);
    adicionaProjeto(data);
  };

  return (
    <>
      <main className="container col-3">
        <h1>Criar projeto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="responsavel" className="form-label">
              Responsável
            </label>
            <input
              type="text"
              className="form-control"
              id="responsavel"
              {...register("responsavel", { required: true })}
            />
            {errors.responsavel && (
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
              {...register("descricao", { required: true })}
            ></textarea>
            {errors.descricao && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Salvar
          </button>
        </form>
      </main>
    </>
  );
};

export default ProjetoCriar;
