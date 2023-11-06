import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ActualizarDatos() {
  const [nombre, setNombre] = useState('');
  const [nuevoApellido, setNuevoApellido] = useState('');
  const [registro, setRegistro] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setErrorMensaje(''); // Reinicia el mensaje de error al cambiar el nombre
  };

  const handleNuevoApellidoChange = (e) => {
    setNuevoApellido(e.target.value);
  };

  const handleBuscarClick = async () => {
    try {
      const response = await axios.get(`/api/obtener-datos/${nombre}`);

      if (response.status === 200) {
        setRegistro(response.data); // Almacena el registro encontrado en el estado
      } else {
        setRegistro(null); // Reinicia el estado del registro si no se encuentra
        setErrorMensaje('Registro no encontrado. Respuesta del servidor: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error al buscar datos:', error);
      setErrorMensaje('Error al buscar datos: ' + error.message);
    }
  };

  const handleActualizarClick = async () => {
    try {
      if (!registro) {
        alert('Debes buscar un registro primero');
        return;
      }

      const apiUrl = `http://localhost:5014/api/actualizar-datos/${registro.id}`;

      const response = await axios.put(apiUrl, {
        nuevoApellido: nuevoApellido,
      });

      if (response.status === 200) {
        alert('Datos actualizados correctamente');
      } else {
        alert('Error al actualizar los datos');
      }
    } catch (error) {
      console.error('Error al actualizar datos:', error);
    }
  };

  useEffect(() => {
    setRegistro(null); // Limpia el registro al cambiar el nombre
  }, [nombre]);

  return (
    <div>
      <h2>Actualizar Datos ruta nueva</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <button onClick={handleBuscarClick}>Buscar</button>
      </div>
      {registro && (
        <div>
          <h3>Registro encontrado:</h3>
          <p>Nombre: {registro.nombre}</p>
          <p>Apellido: {registro.apellido}</p>
        </div>
      )}
      {errorMensaje && <p className="error-message">{errorMensaje}</p>}
      <div className="form-group">
        <label htmlFor="nuevoApellido">Nuevo Apellido:</label>
        <input
          type="text"
          id="nuevoApellido"
          value={nuevoApellido}
          onChange={handleNuevoApellidoChange}
        />
      </div>
      <button onClick={handleActualizarClick}>Actualizar Datos</button>
    </div>
  );
}

export default ActualizarDatos;
