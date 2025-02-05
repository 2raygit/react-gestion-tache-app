
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-white p-4 shadow-lg flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="data:image/png;base64,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" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
        <h1 className="text-3xl font-extrabold">Gestion des Tâches</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md transition-colors hover:text-white">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:bg-blue-500 px-3 py-2 rounded-md transition-colors hover:text-white">
              Tâches
            </Link>
          </li>
          {/* Ajoutez d'autres liens si nécessaire */}
        </ul>
      </nav>

      {/* Bouton de connexion ou utilisateur */}
      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-colors">
          Connexion
        </button>
      </div>
    </header>
  );
};

export default Header;

