import React from 'react';
import TaskControls from './taskControls';

const Task = ({ tarea, actualizarTarea, borrarTarea }) => {
  return (
    <li>
      <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}>
        {tarea.title}
      </span>
      <TaskControls tarea={tarea} actualizarTarea={actualizarTarea} borrarTarea={borrarTarea} />
    </li>
  );
};

export default Task;
