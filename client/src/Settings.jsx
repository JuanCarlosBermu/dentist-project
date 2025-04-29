import React from "react";

function Settings() {
    return (
        <div className="settings-container">
            <h1>Configuración</h1>
            <form className="settings-form">
                <h2>Precios</h2>
                <div className="price-grid">
                    <label htmlFor="extraccion">Extraccion</label>
                    <input type="number" id="extraccion" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="limpieza">Limpieza</label>
                    <input type="number" id="limpieza" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="endodoncia">Endodoncia</label>
                    <input type="number" id="endodoncia" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="implante">Implante</label>
                    <input type="number" id="implante" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="corona">Corona</label>
                    <input type="number" id="corona" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="blanqueamiento">Blanqueamiento</label>
                    <input type="number" id="blanqueamiento" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="consulta">Consulta</label>
                    <input type="number" id="consulta" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="radiografia">Radiografía</label>
                    <input type="number" id="radiografia" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="cirugia">Cirugía</label>
                    <input type="number" id="cirugia" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="ortodoncia">Ortodoncia</label>
                    <input type="number" id="ortodoncia" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="periodoncia">Periodoncia</label>
                    <input type="number" id="periodoncia" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="odontopediatria">Odontopediatría</label>
                    <input type="number" id="odontopediatria" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save">Guardar</button>
                    <label htmlFor="protesis">Prótesis</label>
                    <input type="number" id="protesis" className="form-control" placeholder="ingrese un precio" />
                    <button className="btn btn-save"><i className="bi bi-check"></i></button>
                </div>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
            </form>
        </div>
    );
}

export default Settings;