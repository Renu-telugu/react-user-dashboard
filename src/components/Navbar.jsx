import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 min-w-0 flex-1">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fas fa-users text-white text-sm"></i>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
              User Dashboard
            </span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <Link
              to="/dashboard"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className="btn-primary text-sm sm:text-base px-3 sm:px-4 py-2 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Create New User</span>
              <span className="sm:hidden">Create</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
