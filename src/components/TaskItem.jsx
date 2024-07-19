import PropTypes from 'prop-types';
import '../styles.css';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task-item neon-border"  style={{ backgroundImage: `url(${task.image || 'https://via.placeholder.com/200'})` }}>
      <img src={task.image || 'https://via.placeholder.com/200'} alt={task.name} />
      <div className="task-item-content">
        <h3 className="text-xl font-semibold">{task.name}</h3>
        <p className="text-gray-300 mt-2">{task.description}</p>
        <div className="mt-4 flex space-x-2">
          <button 
            onClick={() => onToggleComplete(task.id)} 
            className={`task-item-button ${task.completed ? 'task-item-button-incomplete' : 'task-item-button-complete'}`}
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button 
            onClick={() => onEdit(task)} 
            className="task-item-button task-item-button-edit"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(task.id)} 
            className="task-item-button task-item-button-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,  // Ajouté pour les images
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
