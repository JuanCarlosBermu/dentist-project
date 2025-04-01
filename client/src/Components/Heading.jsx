import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Heading() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/Agenda', label: 'Agenda' },
    { path: '/Expedientes', label: 'Expedientes' },
    { path: '/Registro', label: 'Registro de pacientes' },
    { path: '/Ajustes', label: <img src="settings.svg" alt="Ajustes" className="settings-icon" /> },
  ];

  const currentPage = navItems.find(item => item.path === location.pathname) || navItems[0];

  return (
    <header className="heading">
      <div className="logo">
        <img src="tooth.svg" alt="Logotipo" /><span>Hola Dra.Karla | Consultorio 1</span>
      </div>
      <h1>{currentPage.label}</h1>
      <nav className="navElements">
        {navItems.map(item => (
          <Link 
            key={item.path} 
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Heading;