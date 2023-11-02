import React, { useState, useEffect } from 'react';

function Inicio() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5005/api/obtener-datos') // Reemplaza con la URL correcta de tu servidor
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setUsuarios(data);
      })
      .catch(error => {
        console.error('Error al obtener datos de usuarios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
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
