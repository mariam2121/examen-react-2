import React from 'react';

const TaskControls = ({ tarea, actualizarTarea, eliminarTarea }) => {
  const handleToggleCompleted = () => {
    actualizarTarea({ ...tarea, completada: !tarea.completada });
  };

  return (
    <div>
      <button onClick={handleToggleCompleted}>
        {tarea.completada ? 'Marcar como Incompleta' : 'Marcar como Completa'}
      </button>
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </div>
  );
};

export default TaskControls;
