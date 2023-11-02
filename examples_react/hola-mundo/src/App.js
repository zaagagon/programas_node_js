import React from 'react';
import {
  BrowserRouter as Router,
  Routes,  // Importamos Routes en lugar de Route
  Route,   // Importamos Route para definir rutas individuales
} from 'react-router-dom';
import Home from './components/Home';
import Pagina from './components/Pagina';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina" element={<Pagina />} />
      </Routes>
    </Router>
  );
}

export default App;
