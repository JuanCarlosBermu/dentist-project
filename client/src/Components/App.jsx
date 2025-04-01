import React from "react";
// import { useState, useEffect } from "react";
 //import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Heading from "./Heading";
import Expedientes from "../Expedientes";
import AgendaComponent from "../Agenda";
import Home from "../Home";
import Registro from "../Registro";
import Login from "../Login";
import Dashboard from "../Dashboard";
import RegistroDiario from "./RegistroDiario";
import RegistroMensual from "./RegistroMensual";
import NuevoRegistro from "../NuevoRegistro";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

function App() {
  // const [message, setMessage] = useState("");

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:3000/api");
  //   setMessage(response.data.message);
  //   console.log(response.data.message);
  // }
  // useEffect(() => {
  //   fetchAPI();
  // }, []);
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element=
            {<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
        <Route path="/Expedientes" element={<Expedientes />} />
        <Route path="/Agenda" element={<AgendaComponent />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/RegistroDiario" element={<RegistroDiario />} />
        <Route path="/RegistroMensual" element={<RegistroMensual />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NuevoRegistro" element={<NuevoRegistro />} />
      </Routes>
      {/* {message} */}
    </BrowserRouter>
  )
}
  
  

export default App
