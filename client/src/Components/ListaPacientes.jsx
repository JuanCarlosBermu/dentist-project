import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import BtnNuevoPx from "./BtnNuevoPx";

function ListaPacientes() {
    //Se crea un array para almacenar los nombres de los pacientes los cuales se extraen de la base de datos PostgreSQL
    const pacientes = ["Juan Gonzalez", "Pedro Alvarez", "Maria Zuniga", "Luis Villa", "Ana Suarez", "Jose Vargas", "Sofia Sepulveda", "Carlos Paredes", "Fernanda Pino", "Ricardo Rojas"];
    const [selectedPatient, setSelectedPatient] = useState(null);
    
    return(
        <div>
            <h2 className="mb-3">Pacientes <span>({pacientes.length})</span></h2>
            <div className="list-group">
            <SearchBar />
                {pacientes.map((paciente, index) => (
                    <button 
                        key={index} 
                        className={`list-group-item list-group-item-action ${selectedPatient === index ? 'active' : ''}`}
                        onClick={() => setSelectedPatient(index)}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            {paciente}
                            <span className={`badge rounded-pill ${selectedPatient === index ? 'bg-white text-primary' : 'bg-primary'}`}>
                                →
                            </span>
                        </div>
                    </button>
                ))}
            </div>
           <BtnNuevoPx />
        </div>
    )
}

export default ListaPacientes;