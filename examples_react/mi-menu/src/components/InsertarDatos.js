import React, { useState } from 'react';
import axios from 'axios';

function InsertarDatos() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');

  const handleInsertarDatos = () => {
    // Realiza una solicitud POST para insertar datos en la base de datos
    axios.post('/api/insertar-datos', { nombre, edad, correo })
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta según tus necesidades
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Insertar Datos en la Base de Datos</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <input type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <button onClick={handleInsertarDatos}>Insertar Datos</button>
    </div>
  );
}

export default InsertarDatos;
