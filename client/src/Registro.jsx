import React from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; // Add this import

function Registro() { 
  const navigate = useNavigate();

  return (
    <div className="registro-container">
      <div className="button-container">
        <input 
          className="registro-button"
          onClick={() => navigate("/RegistroDiario")} 
          type="button" 
          value="Diario"
        /> 
        <input 
          className="registro-button"
          onClick={() => navigate("/RegistroMensual")} 
          type="button"
          value="Mensual" 
        />
      </div>
    </div>
  );
}

export default Registro;