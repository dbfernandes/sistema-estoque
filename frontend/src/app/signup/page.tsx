"use client";

import api from "@/services/api";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  nome: string;
  email: string;
  senha: string;
  senhaConfirmar: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // ignorando o senhaConfirmar
    const { senhaConfirmar, ...creds } = data;

    api.post("/signup", creds, { withCredentials: true }).then((data) => {
      console.log(creds);
      router.push("/login");
    });
  };

  const senha = watch("senha");

  return (
    <main>
      <div className="container col-3 mt-5">
        <h1>Criação de Conta</h1>

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
              {...register("nome", { required: true })}
            />
            {errors.nome && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              {...register("senha", { required: true, minLength: 6 })}
            />

            {errors.senha?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}

            {errors.senha?.type === "minLength" && (
              <span className="text-danger">Minímo de 6 (seis) caracteres</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmarSenha" className="form-label">
              Confirmar Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmarSenha"
              aria-describedby="confirmarSenha"
              {...register("senhaConfirmar", {
                required: true,
                validate: (value) => value === senha || "Senhas não coincidem",
              })}
            />
            {errors.senhaConfirmar?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
            {errors.senhaConfirmar?.type === "validate" && (
              <span className="text-danger">
                {errors.senhaConfirmar.message}
              </span>
            )}
          </div>

          <div className="d-grid col-12">
            <button type="submit" className="btn btn-primary">
              Confirmar cadastro
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
