import React from "react";
import Consultas from "./Consultas";
import Fecha from "./Fecha";
import { useNavigate } from "react-router-dom";
import BtnNuevoRegistro from "./BtnNuevoRegistro";
import BtnNuevoPx from "./BtnNuevoPx";  
import "./RegistroDiario.css";
import NuevoRegistro from "../NuevoRegistro";

function RegistroDiario() {
    const navigate = useNavigate();
    return(
    <div className="registro-diario-container">
        <div className="fecha-header">
            <h2><Fecha /></h2>
        </div>
        <div className="header-container">
            <h1>Registro Diario</h1>
            <div className="btn-nuevo-registro">
            <button 
            onClick={() => navigate("/NuevoRegistro")}
            type="button"
            className="btn bg-pill d-flex align-items-center gap-2">
                <i className="bi bi-plus-circle"></i>
                Nuevo Registro
            </button>
        </div>
        </div>
        <Consultas />
    </div>
    )
}

export default RegistroDiario;