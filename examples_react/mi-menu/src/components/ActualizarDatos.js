import React, { useState } from 'react';
import axios from 'axios';

function ActualizarDatos() {
  const [nombre, setNombre] = useState('');
  const [nuevoApellido, setNuevoApellido] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleNuevoApellidoChange = (e) => {
    setNuevoApellido(e.target.value);
  };

  const handleActualizarClick = async () => {
    try {
      // Realiza una solicitud al servidor para actualizar los datos (usando PUT)
      const response = await axios.put(`/api/actualizar-datos/${nombre}`, {
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

  return (
    <div>
      <h2>Actualizar Datos</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
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
