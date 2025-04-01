import React from "react";

function BtnNuevoPx() {
    return(
        <div className="mt-3 d-grid">
            <button className="btn bg-white rounded-pill shadow-sm hover-shadow">
                <i className="bi bi-plus-circle me-2"></i>
                Nuevo Paciente
            </button>
        </div>
    )
}       

export default BtnNuevoPx;