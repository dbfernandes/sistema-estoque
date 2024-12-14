"use client";
import { useListaProjetos } from "@/hooks/useListaProjetos";
import { useRemoveProjeto } from "@/hooks/useRemoveProjeto";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-toastify";

const Page = () => {
  const queryClient = useQueryClient();
  const { projetos } = useListaProjetos();
  const { mutate: removeProjeto } = useRemoveProjeto(
    () => {
      toast.success("Projeto removido.");
      queryClient.invalidateQueries({ queryKey: ["listaProjetos"] });
    },
    () => toast.error("Erro ao remover o projeto.")
  );

  return (
    <>
      <main className="container">
        <h1>Projetos</h1>
        <Link className="nav-link active" href="/projetos/criar">
          <button className="btn btn-primary">Criar</button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsável</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto, index) => (
              <tr key={projeto.id}>
                <th scope="row">{index + 1}</th>
                <td>{projeto.nome}</td>
                <td>{projeto.responsavel}</td>
                <td>{projeto.descricao}</td>
                <td>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeProjeto(projeto.id)}
                    >
                      <i className="bi bi-trash-fill me-1"></i>
                      Excluir
                    </button>
                    <button type="button" className="btn btn-warning">
                      <i className="bi bi-pencil-fill me-1"></i>
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Page;
