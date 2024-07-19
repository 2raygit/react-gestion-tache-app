// Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar-bg shadow-lg p-6 flex flex-col animate-slide-in">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors duration-300 transform hover:scale-105"
            >
              <span className="material-icons mr-3 text-gray-700">home</span>
              <span className="text-gray-700">Accueil</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="flex items-center p-3 rounded-lg hover:bg-sidebar-hover transition-colors duration-300 transform hover:scale-105"
            >
              <span className="material-icons mr-3 text-gray-700">task</span>
              <span className="text-gray-700">Tâches</span>
            </Link>
          </li>
          {/* Ajoutez d'autres liens ici */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
