"use client"

import { Box, TextField, Button } from "@mui/material";
import { useState, FormEvent } from "react";

import { SignUpDto } from "@/types/auth";

import api from "@/services/api";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "next/navigation";
import {
  IconButton,
  Typography,
} from "../../../node_modules/@mui/material/index";

function SignUp() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmSenha, setConfirmSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [viewSenha, setViewSenha] = useState<boolean>(false);
  const [viewConfirmSenha, setViewConfirmSenha] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (senha != confirmSenha) {
      setError("as senhas não batem");
    } else {
      const credenciais: SignUpDto = {
        nome: nome!,
        email: email!,
        senha: senha!,
      };
      api.post("/signup", credenciais).then((data) => {
        router.push("/produto");
      });
    }
  };

  return (
    <>
      <h1>Criação de Conta</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            sx={{ width: 300 }}
            label="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            sx={{ width: 300 }}
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            sx={{ width: 300 }}
            label="Senha"
            type={viewSenha ? "text" : "password"}
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewSenha(!viewSenha);
                    }}
                  >
                    {viewSenha ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            sx={{ width: 300 }}
            label="Confirme Senha"
            required
            type={viewConfirmSenha ? "text" : "password"}
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewConfirmSenha(!viewConfirmSenha);
                    }}
                  >
                    {viewConfirmSenha ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Box>
        <Button variant="contained" type="submit">
          Criar Conta
        </Button>
      </form>
    </>
  );
}

export default SignUp;
