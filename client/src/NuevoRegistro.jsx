import React from "react"
import Fecha from "./Components/Fecha";
import BtnNuevoPx from "./Components/BtnNuevoPx";
function NuevoRegistro() {
    return (

<div className="registro-diario-container">
        <div className="fecha-header">
            <h2><Fecha /></h2>
        </div>
        
        <div className="form-container">
            <h3>Nuevo Registro</h3>
            <form className="registro-form">
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="number" name="id" id="id" placeholder="Numero de paciente en el dia"/>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="nombre">Paciente</label>
                        <select name="nombre" id="nombre">
                            <option value="" disabled selected>Seleccione un paciente</option>
                            <option value="nombre1">Nombre 1</option>
                            <option value="nombre2">Nombre 2</option>
                            <option value="nombre3">Nombre 3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nuevo-paciente">Nuevo Paciente</label>
                        <BtnNuevoPx />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="id">Tratamiento</label>
                    <input type="text" name="tratamiento" id="tratamiento" placeholder="Resinas, extracciones, Rx..."/>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="efectivo">Efectivo</label>
                        <input type="number" name="efectivo" id="efectivo"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tarjeta">Tarjeta</label>
                        <input type="number" name="tarjeta" id="tarjeta"/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Doctor</label>
                    <select name="doctor" id="doctor">
                        <option value="" disabled selected>Seleccione un doctor</option>
                        <option value="1">Dra. Pérez</option>
                        <option value="2">Dra. Gómez</option>
                        <option value="3">Dra. López</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="observaciones">Observaciones</label>
                    <textarea name="observaciones" id="observaciones" rows="3"></textarea>
                </div>

                <button type="submit" className="submit-button">Registrar</button>
            </form>
        </div>
       
    </div>
    )
}

export default NuevoRegistro;