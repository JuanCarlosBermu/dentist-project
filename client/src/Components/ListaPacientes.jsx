import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";

function ListaPacientes() {
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
            <div className="mt-3 d-grid">
                <button className="btn bg-white rounded-pill shadow-sm hover-shadow">
                    <i className="bi bi-plus-circle me-2"></i>
                    Nuevo Paciente
                </button>
            </div>
        </div>
    )
}

export default ListaPacientes;