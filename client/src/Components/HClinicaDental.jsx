import React from "react";

function HClinicaDental() {
    return(
        <div>
            <h1>Historia Clinica Dental</h1>
            <form className="hclinica-form">
                <label htmlFor="AntecedentesDentales">Antecedentes dentales: </label>
                <input type="text" id="AntecedentesDentales" name="AntecedentesDentales" />
                <label htmlFor="HabitosBucales">Habitos bucales: </label>
                <input type="text" id="HabitosBucales" name="HabitosBucales" />
                <label htmlFor="UltimaVisita">Ultima Visita: </label>
                <input type="date" id="UltimaVisita" name="UltimaVisita" />
                <label htmlFor="EvalTejidosBlandos">Evaluacion de Tejidos Blandos: </label>
                <input type="text" id="EvalTejidosBlandos" name="EvalTejidosBlandos" />
                <label htmlFor="EvalOclusion">Evaluacion de Oclusion: </label>
                <input type="text" id="EvalOclusion" name="EvalOclusion" />
                <label htmlFor="EvalDientes">Evaluacion de Dientes: </label>
                <input type="text" id="EvalDientes" name="EvalDientes" />
                <label htmlFor="Diagnostico">Diagnostico: </label>
                <input type="text" id="Diagnostico" name="Diagnostico" />
            </form>
        </div>
    )
}

export default HClinicaDental;