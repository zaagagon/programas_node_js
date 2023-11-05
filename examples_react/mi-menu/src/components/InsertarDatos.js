import React, { useState } from 'react';
import axios from 'axios';

function InsertarDatos() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleInsertarDatos = () => {
    // Crea un objeto que contiene los campos 'nombre', 'apellido', 'correo' y 'contrasena'
    const data = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      contrasena: contrasena
    };

    // Realiza una solicitud POST para insertar datos en la base de datos
    axios.post('http://localhost:5013/api/insertar-datos', data)
      .then((response) => {
        // Mostrar una alerta con los datos ingresados
        alert('Datos ingresados con éxito: ' + JSON.stringify(response.data));
        // Limpia los campos de entrada
        setNombre('');
        setApellido('');
        setCorreo('');
        setContrasena('');
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
      <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <input type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="text" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={handleInsertarDatos}>Insertar Datos</button>
    </div>
  );
}

export default InsertarDatos;
