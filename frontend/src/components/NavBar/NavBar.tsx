"use client";

import { AuthContext } from "@/provider/AuthProvider";
import api from "@/services/api";
import router from "next/router";
import { useContext } from "react";
import Link from "next/link";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const onLogout = () => {
    api.post("/logout", undefined, { withCredentials: true }).then((data) => {
      setAuth(null);
      router.push("/");
    });
  };
  return (
    <nav className="navbar bg-primary navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sistema
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            {!auth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" href="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="/signup">
                    Cadastro
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link active" href="/equipamentos">
                Equipamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/projetos">
                Projetos
              </Link>
            </li>
          </ul>
          <p className="nav-item mb-2 me-2 mb-md-0">{auth ? auth.nome : ""}</p>
          {auth && (
            <>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
