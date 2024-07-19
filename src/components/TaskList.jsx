import PropTypes from 'prop-types';
import '../styles.css' ;

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tasks.map(task => (
        <div key={task.id} className="relative bg-white p-4 shadow-lg rounded-lg border border-gray-200 overflow-hidden w-full sm:w-1/2 lg:w-1/3">
          <img
            src={task.image}
            alt={task.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p className="text-gray-700">{task.description}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onEdit(task)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => onToggleComplete(task.id)}
                className={`px-4 py-2 rounded-md shadow-md ${task.completed ? 'bg-green-500' : 'bg-gray-500'} text-white hover:${task.completed ? 'bg-green-600' : 'bg-gray-600'} transition-colors`}
              >
                {task.completed ? 'Completed' : 'Complete'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

// Validation des types pour les props
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    image: PropTypes.string,  // Ajouté pour les images
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};
