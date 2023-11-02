import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/home';  // Importa el componente Home desde su archivo
import Pagina from './components/Pagina';  // Importa el componente Pagina desde su archivo

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/pagina" component={Pagina} />
    </Router>
  );
}

//export default App;


export default App;
