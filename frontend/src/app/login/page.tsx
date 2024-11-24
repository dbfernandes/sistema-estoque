"use client";
import { AuthContext } from "@/provider/AuthProvider";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  senha: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { auth, setAuth } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    api
      .post("/login", data, { withCredentials: true })
      .then((data) => {
        console.log(data);
        setAuth({ nome: data.data.nome, tipoUsuario: data.data.tipoUsuario });
        router.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401)
          setError("Email e/ou Senha inválidos.");
        else {
          setError("Ocorreu um erro.");
        }
        console.log(err);
      });
  };

  return (
    <main>
      <div className="container col-3 mt-5">
        <h1>Login de Usuário</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {error && <span className="text-danger">{error}</span>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
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
              {...register("senha", { required: true })}
            />
            {errors.senha?.type === "required" && (
              <span className="text-danger">Esse campo é obrigatório</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
