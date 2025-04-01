import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:3000/api/protected", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(res.data);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert("No autorizado, redirigiendo a login");
        navigate("/");
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Cargando...</p>}
    </div>
  );
};

export default Dashboard;
