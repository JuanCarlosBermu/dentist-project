import React from "react";

function Registro() {
  return (
    <div>
      <h1>Registro Diario</h1>
        <p>En esta sección se llevará el registro diario de las actividades del consultorio.</p>
        <p>Se podrán registrar los siguientes datos:</p>
        <form action="submit">
            <label htmlFor="">Paciente: </label>
            <select name="nombre" id="nombre">
                <option value="nombre1">Nombre 1</option>
                <option value="nombre2">Nombre 2</option>
                <option value="nombre3">Nombre 3</option>
                </select>
        </form>
        
    </div>
  );
}

export default Registro;