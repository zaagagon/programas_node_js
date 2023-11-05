import React, { useState } from 'react';
import axios from 'axios';

function InsertarDatos() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');

  const handleInsertarDatos = () => {
    // Realiza una solicitud POST para insertar datos en la base de datos
    axios.post('http://localhost:5013/api/insertar-datos', { nombre, edad, correo })
      .then((response) => {
        // Mostrar una alerta con los datos ingresados
        alert('Datos ingresados con éxito: ' + JSON.stringify(response.data));
        // Limpia los campos de entrada
        setNombre('');
        setEdad('');
        setCorreo('');
      })
      .catch((error) => {
        // Mostrar una alerta en caso de error
        alert('Error al insertar datos: ' + error.message);
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
