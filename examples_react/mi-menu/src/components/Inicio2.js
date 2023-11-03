import React, { useState, useEffect } from 'react';

function Inicio2() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Realizar una solicitud para obtener los datos de la tabla "usuarios"
    //fetch('/api/obtener-datos') 
    fetch('http://localhost:5004/api/')
    // Reemplaza con la ruta correcta de tu servidor
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        setUsuarios(data);
      })
      .catch(error => {
        //console.error('Error al obtener datos de usuarios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            Nombre: {usuario.nombre}, Email: {usuario.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio2;
