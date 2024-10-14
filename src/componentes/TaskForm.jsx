import React, { useRef } from 'react';

const TaskForm = ({ agregarTarea }) => {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      title: titleRef.current.value,
      completed: false
    };
    agregarTarea(nuevaTarea);
    titleRef.current.value = '';  
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nueva Tarea</h2>
      <input ref={titleRef} type="text" placeholder="Título de la tarea" required />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
