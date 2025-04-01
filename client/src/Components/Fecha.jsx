import React from "react";

function Fecha() {
    const fecha = new Date();

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mesNumero = fecha.getMonth(); // Los meses en JavaScript van de 0 a 11
    const anio = fecha.getFullYear();
  
    // Array con los nombres de los meses en español
    const nombresMeses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const mesNombre = nombresMeses[mesNumero];
  
    const fechaFormateada = `${dia}/${mesNombre}/${anio}`;
    return (
        fechaFormateada
    );
}

export default Fecha;