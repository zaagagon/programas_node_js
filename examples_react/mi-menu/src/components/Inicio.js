import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Inicio() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Reemplazar con la URL correcta de mi servidor
    axios.get('http://localhost:5013/api/obtener-datos') 
      .then(response => {
        if (response.status === 200) {
          setUsuarios(response.data);
        } else {
          throw new Error('No se pudo obtener los datos de Axios');
        }
      })
      .catch(error => {
        console.error('Error al obtener datos de usuarios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios desde ruta inicio</h1>
      <h1>base de dato prueba - mysql - react</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inicio;
