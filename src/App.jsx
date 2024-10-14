import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tareas, setTareas] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(response => setTareas(response.data))
      .catch(error => console.error('Error al cargar tareas:', error));
  }, []);

  // Agregar una tarea
  const agregarTarea = (nuevaTarea) => {
    axios.post('http://localhost:3001/tasks', nuevaTarea)
      .then(response => setTareas([...tareas, response.data]))
      .catch(error => console.error('Error al agregar tarea:', error));
  };

  // Eliminar una tarea
  const eliminarTarea = (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`)
      .then(() => setTareas(tareas.filter(tarea => tarea.id !== id)))
      .catch(error => console.error('Error al eliminar tarea:', error));
  };

  // Actualizar una tarea
  const actulizarTarea = (actualizaTarea) => {
    axios.put(`http://localhost:3001/tasks/${actualizaTarea.id}`, actualizaTarea)
      .then(response => {
        setTareas(tareas.map(tarea => tarea.id === actualizaTarea.id ? response.data : task));
      })
      .catch(error => console.error('Error al actualizar tarea:', error));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Lista de Tareas</Link>
        <Link to="/nueva">Nueva Tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList tasks={tareas} actualizaTarea={actulizarTarea} eliminarTarea={eliminarTarea} />} />
        <Route path="/nueva" element={<TaskForm agregarTarea={agregarTarea} />} />
      </Routes>
    </Router>
  );actulizarTarea
};

export default App;
