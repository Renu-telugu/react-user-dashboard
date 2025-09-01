import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              User Dashboard
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/create"
              className="btn-primary"
            >
              Create New User
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
