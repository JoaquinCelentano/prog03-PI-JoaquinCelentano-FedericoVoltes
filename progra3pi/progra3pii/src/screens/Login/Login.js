import React, { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function controlarCambio(e, campo) {
    if (campo === "email") {
      setEmail(e.target.value);
    } else if (campo === "password") {
      setPassword(e.target.value);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    let usersStorage = localStorage.getItem("users");

    if (usersStorage === null) {
      setError("No hay usuarios registrados");
      return;
    }

    let usersParseado = JSON.parse(usersStorage);

    let usuarioEncontrado = usersParseado.filter(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado.length === 0) {
      setError("Credenciales inválidas");
      return;
    }

    cookies.set("userLogged", true, { path: "/" });

    props.history.push("/");
  }

  return (
    <div className="container">

      <h2 className="alert alert-primary">Iniciar sesión</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          
          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}

          <form onSubmit={onSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" onChange={(e) => controlarCambio(e, "email")}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(e) => controlarCambio(e, "password")}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>

          </form>

          <p className="mt-3 text-center"><a href="/register">Registrarse</a></p>

        </div>
      </div>

    </div>
  );
}

export default Login;