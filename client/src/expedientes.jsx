import React from "react";
import ListaPacientes from "./Components/ListaPacientes";
import DatosPacientes from "./Components/DatosPaciente";
import HClinicaGral from "./Components/HClinicaGral";
import HClinicaDental from "./Components/HClinicaDental";
import Consultas from "./Components/Consultas";

function Expedientes() {
    return(
        <div className="expedientes-container">
            <div className="sidebar">
                <ListaPacientes />
            </div>
            <div className="main-content">
                <div className="main-content-DatosPacientes">
                    <DatosPacientes />
                </div>
                <div className="main-content-HClinicaGral">
                    <HClinicaGral />
                </div>
                <div className="main-content-HClinicaDental">
                    <HClinicaDental />
                </div>        
            </div>
            <div className="sidebar2">
                <Consultas />
            </div>
            
        </div>
    )
}

export default Expedientes;
