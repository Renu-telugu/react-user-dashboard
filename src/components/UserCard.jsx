import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <div className="card p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {user.name}
          </h3>
          {user.username && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{user.username}
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope w-4 h-4 text-gray-400 flex-shrink-0"></i>
            <a 
              href={`mailto:${user.email}`}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 truncate"
              title={user.email}
            >
              {user.email}
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone w-4 h-4 text-gray-400 flex-shrink-0"></i>
            <a 
              href={`tel:${user.phone}`}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              {user.phone}
            </a>
          </div>
          
          {user.company && (
            <div className="flex items-center space-x-2">
              <i className="fas fa-building w-4 h-4 text-gray-400 flex-shrink-0"></i>
              <span className="text-sm text-gray-600 dark:text-gray-300 truncate" title={user.company.name}>
                {user.company.name}
              </span>
            </div>
          )}
        </div>
        
        <div className="pt-3">
          <Link
            to={`/users/${user.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center group-hover:shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
