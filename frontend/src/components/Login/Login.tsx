import { useState, FormEvent, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
} from "../../../node_modules/@mui/material/index";

import api from "@/utils/api";

import { AuthContext } from "@/provider/AuthProvider";

import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = () => {
    const credentials = { email, senha };
    api
      .post("/login", credentials, { withCredentials: true })
      .then((data) => {
        setError("");
        setAuth({ nome: data.data.nome, tipoUsuario: data.data.tipoUsuario });
        router.push("/produto");
      })
      .catch((err) => {
        if (err.response.status === 401)
          setError("Informações de Login Incorretas");
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login de Usuário</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></TextField>
        </Box>
        <Button variant="contained" type="submit">
          Entrar
        </Button>
        <Box>
          <Typography variant="body2" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Box>
      </form>
    </div>
  );
}

export default Login;
