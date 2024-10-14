import React from 'react';
import Task from './Task';

const TaskList = ({ tareas, actualizarTareas, eliminarTareas }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tareas.length > 0 ? (
        <ul>
          {tareas.map(tarea => (
            <Task key={tarea.id} tarea={tarea} actualizarTareask={actualizarTareas} eliminarTareas={eliminarTareas} />
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles</p>
      )}
    </div>
  );
};

export default TaskList;
