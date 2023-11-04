import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio2 from './components/Inicio2';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
// Importa el componente de inserción
import InsertarDatos from './components/InsertarDatos'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [datos, setDatos] = useState([]);

  const cargarDatos = async () => {
    try {
      const response = await axios.get('/api/obtener-datos');
      if (response.status === 200) {
        setDatos(response.data);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <Router>
      <div className="container mt-4">
        <nav>
          <Link to="/" className="btn btn-primary me-2">Inicio</Link>
          <Link to="/acerca" className="btn btn-secondary me-2">Acerca</Link>
          <Link to="/insertar-datos" className="btn btn-success">Insertar Datos</Link> {/* Agrega un enlace para la inserción */}
        </nav>

        <Routes>
          <Route path="/api" element={<Inicio2 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca datos={datos} />} />
          <Route path="/insertar-datos" element={<InsertarDatos />} /> {/* Agrega una nueva ruta para la inserción */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
