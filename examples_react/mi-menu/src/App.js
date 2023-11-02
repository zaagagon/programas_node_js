import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
// Importamos los estilos de Bootstrap

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav>
          <Link to="/" className="btn btn-primary me-2">Inicio</Link>
          <Link to="/acerca" className="btn btn-secondary">Acerca</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
