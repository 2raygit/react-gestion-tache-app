import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../styles.css';

const TaskForm = ({ currentTask, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (currentTask) {
      setName(currentTask.name);
      setDescription(currentTask.description);
      setImage(currentTask.image || '');
    } else {
      setName('');
      setDescription('');
      setImage('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    onSave({ id: currentTask ? currentTask.id : Date.now(), name, description, image, completed: false });
    setName('');
    setDescription('');
    setImage('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  return (
    <div 
      className="relative bg-cover bg-center p-6 rounded-lg mb-6"
      style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQCNTpzzOCq4BerNxGlxHto_A-xhq1AM3bFzeklBgy6iouj0DPTnHthp3eo_7xKSwlE0&usqp=CAU)' }}  // Assurez-vous que le chemin est correct
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
      <form
        className="relative z-10 bg-white bg-opacity-70 neon-border p-6 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Tâche</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Description de la Tâche</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={handleImageChange}
            placeholder="URL de l'image"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

// Validation des types pour les props
TaskForm.propTypes = {
  currentTask: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,  // Ajouté pour les images
    completed: PropTypes.bool,
  }),
  onSave: PropTypes.func.isRequired,
};
