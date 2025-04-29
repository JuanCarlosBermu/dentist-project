import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);  // Almacenar token
      alert("Login exitoso");
      navigate("/Dashboard");  // Redirigir a página protegida
    } catch (error) {
      alert(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Consultorio</label>
            <select name="consultorio" id="consultorio">
                <option value="1">Consultorio 1</option>
                <option value="2">Consultorio 2</option>
            </select>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
