import React from "react";
import { Link } from 'react-router-dom';

function Heading() {
    return (
      <header className="heading">
        <div className="logo">
          <img src="tooth.svg" alt="Logotipo" />
        </div>
        <h1>Dentist App (dev)</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/Agenda">Agenda</Link>
          <Link to="/Expedientes">Expedientes</Link>
          <Link to="/registro">Registro diario</Link>
          <Link to="/caja">Caja</Link>
        </nav>
      </header>
    );
  }
  
  export default Heading;