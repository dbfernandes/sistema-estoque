"use client";
import { useAdicionaProjeto } from "@/hooks/useAdicionaProjeto";
import { CreateProjetoDto } from "@/types/projeto";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { joiResolver } from "@hookform/resolvers/joi";
import projetoSchema from "@/schemas/projeto";

const ProjetoCriar = () => {
  const router = useRouter();
  const { mutate: adicionaProjeto } = useAdicionaProjeto(
    () => {
      toast.success("Projeto adicionado com sucesso!");
      router.push("/projetos");
    },
    () => toast.error("Houve um erro ao adicionar o projeto.")
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjetoDto>({
    resolver: joiResolver(projetoSchema),
  });

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
              className="form-control mb-2"
              id="nome"
              {...register("nome")}
            />
            {errors.nome && (
              <span className="text-danger">{errors.nome.message}</span>
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
              {...register("responsavel")}
            />
            {errors.responsavel && (
              <span className="text-danger">{errors.responsavel.message}</span>
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
              {...register("descricao")}
            ></textarea>
            {errors.descricao && (
              <span className="text-danger">{errors.descricao.message}</span>
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
