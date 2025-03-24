import React from "react";

function HClinicaGral() {
    return(
        <div>
            <h1>Historia Clinica General</h1>
            <form className="hclinica-form">
                <label htmlFor="motivoConsulta">Motivo de la consulta: </label>
                <input type="text" id="motivoConsulta" name="motivoConsulta" />
                <label htmlFor="antecedentes">Antecedentes: </label>
                <input type="text" id="antecedentes" name="antecedentes" />
                <label htmlFor="alergias">Alergias: </label>
                <input type="text" id="alergias" name="alergias" />
                <label htmlFor="medicamentos">Medicamentos: </label>
                <input type="text" id="medicamentos" name="medicamentos" />
                <label htmlFor="enfermedades">Enfermedades: </label>
                <input type="text" id="enfermedades" name="enfermedades" />
                <label htmlFor="cirugias">Cirugias: </label>
                <input type="text" id="cirugias" name="cirugias" />
                <label htmlFor="hospitalizaciones">Hospitalizaciones: </label>
                <input type="text" id="hospitalizaciones" name="hospitalizaciones" />
                <label htmlFor="traumatismos">Traumatismos: </label>
                <input type="text" id="traumatismos" name="traumatismos" />
                <br />
                <label htmlFor="tabaquismo">Tabaquismo: </label>
                <input type="checkbox" id="tabaquismo" name="tabaquismo" />
                <label htmlFor="alcoholismo">Alcoholismo: </label>
                <input type="checkbox" id="alcoholismo" name="alcoholismo" />
                <label htmlFor="Diabetes">Diabetes: </label>
                <input type="checkbox" id="Diabetes" name="Diabetes" />
                <label htmlFor="hipertension">Hipertension: </label>
                <input type="checkbox" id="hipertension" name="hipertension" />

            </form>
        </div>
    )
}

export default HClinicaGral;