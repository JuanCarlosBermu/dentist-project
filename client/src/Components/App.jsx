import React from "react";
// import { useState, useEffect } from "react";
 //import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heading from "./Heading";
import Expedientes from "../Expedientes";
import AgendaComponent from "../Agenda";
import Home from "../Home";

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
        <Route path="/" element={<Home />} />
        <Route path="/Expedientes" element={<Expedientes />} />
        <Route path="/Agenda" element={<AgendaComponent />} />
      </Routes>
      {/* {message} */}
    </BrowserRouter>
  )
}
  
  

export default App
