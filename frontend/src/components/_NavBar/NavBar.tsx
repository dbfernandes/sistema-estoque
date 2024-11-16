"use client"
import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { AuthContext } from "@/provider/AuthProvider";
import api from "@/services/api";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);
  const onLogout = () => {
    api.post("/logout", undefined, { withCredentials: true }).then((data) => {
      setAuth(null);
      router.push("/produto");
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Loja
          </Typography>
          <Button component={Link} href="/produto" color="inherit">
            Produtos
          </Button>
          {!auth && (
            <>
              <Button component={Link} href="/signup" color="inherit">
                Sign Up
              </Button>
              <Button component={Link} href="/login" color="inherit">
                Login
              </Button>
            </>
          )}
          {auth && (
            <>
              <Button onClick={onLogout} color="inherit">
                Logout {auth.nome}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
