import React from "react";

function Consultas() {
    return (
    <div className="consultas-container">
        <h1>Consultas</h1>
        <table className="consultas-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Procedimiento</th>
                    <th>Costo</th>
                    <th>Doctor</th>
                    <th>Consultorio</th>
                    <th>Observaciones</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                     
                    <td>1</td>
                    <td>2021-09-01</td>
                    <td>Extracción</td>
                    <td>1000</td>
                    <td>Dr. Pérez</td>
                    <td>1</td>
                    <td>Extracción de muela del juicio</td>
                    <td>
                    <button className="btn btn-link">
                            <i className="bi bi-pencil-square text-primary"></i>
                        </button>
                        <button className="btn btn-delete">
                            <i className="bi bi-trash text-danger"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table> 
    </div>
    )
}

export default Consultas;