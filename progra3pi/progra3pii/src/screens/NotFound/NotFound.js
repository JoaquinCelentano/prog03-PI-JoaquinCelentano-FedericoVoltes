import React from "react";
import { Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h2 className="alert alert-danger">Error 404 - Página no existe</h2>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;