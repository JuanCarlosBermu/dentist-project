import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

function BtnNuevoRegistro() {
    const navigate = useNavigate();
    return(
        <div className="btn-nuevo-registro">
            <button 
            onClick={() => navigate("/NuevoRegistro")}
            type="button"
            className="btn bg-pill d-flex align-items-center gap-2">
                <i className="bi bi-plus-circle"></i>
                Nuevo Registro
            </button>
        </div>
    )
}

export default BtnNuevoRegistro;
