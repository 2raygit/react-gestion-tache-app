import  { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    // Charger les tâches depuis localStorage au démarrage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Sauvegarder les tâches dans localStorage à chaque mise à jour
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (task) => {
    if (currentTask) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
      setCurrentTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-gray-100" >
          <TaskForm currentTask={currentTask} onSave={handleSaveTask} />
          <TaskList 
            tasks={tasks} 
            onEdit={handleEditTask} 
            onDelete={handleDeleteTask} 
            onToggleComplete={handleToggleComplete} 
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
