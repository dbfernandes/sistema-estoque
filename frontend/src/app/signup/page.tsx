"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  nome: string;
  email: string;
  emailConfirmar: string;
  senha: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // ignorando o emailConfirmar
    const { emailConfirmar, ...creds } = data;
    console.log(creds);
  };

  const email = watch("email");

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
            <label htmlFor="confirmarEmail" className="form-label">
              Confirmar email
            </label>
            <input
              type="email"
              className="form-control"
              id="confirmarEmail"
              aria-describedby="confirmarEmail"
              {...register("emailConfirmar", {
                required: true,
                validate: (value) => value === email || "Emails não coincidem",
              })}
            />
            {errors.emailConfirmar?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
            {errors.emailConfirmar?.type === "validate" && (
              <span className="text-danger">
                {errors.emailConfirmar.message}
              </span>
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
