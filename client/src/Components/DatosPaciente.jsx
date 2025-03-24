import React from "react";

function DatosPaciente() {
    return(
        <div>
            <h1>Datos del paciente</h1>
            <form className="datos-paciente-form">
                <label htmlFor="pacienteID">Paciente ID</label>
                <input type="text" id="PacienteID" name="PacienteID" disabled />
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" name="nombre" />
                <label htmlFor="apellidos">Apellidos: </label>
                <input type="text" id="apellidos" name="apellidos" />
                <label htmlFor="edad">Fecha de nacimiento: </label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
                <label htmlFor="genero">Genero: </label>
                <select name="genero" id="genero" defaultValue="">
                    <option value="" disabled>-</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <label htmlFor="estadoCivil">Estado civil: </label>
                <select name="estadoCivil" id="estadoCivil" defaultValue="">
                    <option value="" disabled>-</option>
                    <option value="soltero">Soltero</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viudo">Viudo</option>
                </select>
                <label htmlFor="telefono">Telefono: </label>
                <input type="tel" id="telefono" name="telefono" />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="direccion">Direccion: </label>
                <input type="text" id="direccion" name="direccion" />
            </form>
        </div>
    )
}

export default DatosPaciente;
