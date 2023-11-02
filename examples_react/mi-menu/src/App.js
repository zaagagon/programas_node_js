import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// Componentes de páginas
import Inicio from './Inicio';
import Acerca from './Acerca';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca">Acerca</Link>
            </li>
          </ul>
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
