// Importa las bibliotecas necesarias
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio2 from './components/Inicio2';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define un estado para almacenar los datos obtenidos
  const [datos, setDatos] = useState([]);

  // Función para cargar datos desde el servidor
  const cargarDatos = async () => {
    try {
      const response = await fetch('/api/obtener-datos'); // Reemplaza con tu ruta de API
      if (response.ok) {
        const datos = await response.json();
        setDatos(datos);
      }
    } catch (error) {
      //console.error('Error al cargar datos:', error);
    }
  };

  useEffect(() => {
    // Llama a la función para cargar datos cuando el componente se monta
    cargarDatos();
  }, []);

  return (
    <Router>
      <div className="container mt-4">
        <nav>
          <Link to="/" className="btn btn-primary me-2">Inicio</Link>
          <Link to="/acerca" className="btn btn-secondary">Acerca</Link>
        </nav>

        <Routes>

     
        <Route path="/api/" element={<Inicio2 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca datos={datos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
