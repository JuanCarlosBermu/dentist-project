import React from "react";
// import { useState, useEffect } from "react";
 //import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
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
import Settiings from "../Settings";  


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

function App() {

  //const [test, setTest] = useState([]);

  useEffect(() => {
    getTest();
  },[]);

  async function getTest(){
    //const{data} = await supabase.from ("test").select();
    //setTest(data);
  }

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
    <div>
      <ul>
      {test.map((test) => (
        <li key={test.id}>
          {test.id},{test.created_at},{test.name}
        </li>
      ))}
    </ul>
    
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
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
        <Route path="/Settings" element={<Settiings />} />
      </Routes>
      {/* {message} */}
    </BrowserRouter>
    </div>
  )
}
  
  

export default App
